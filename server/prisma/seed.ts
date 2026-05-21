import bcrypt from 'bcryptjs'
import { PrismaClient, ProductStatus } from '@prisma/client'

const prisma = new PrismaClient()

const defaultImage =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3E%D0%91%D0%B5%D0%B7%20%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%3C/text%3E%3C/svg%3E'

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@sakimed.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'change-this-before-production'
  const passwordHash = await bcrypt.hash(adminPassword, 12)

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash,
      name: 'Администратор'
    }
  })

  const honey = await prisma.category.upsert({
    where: { slug: 'pchelni-produkti' },
    update: {},
    create: {
      name: 'Пчелни продукти',
      slug: 'pchelni-produkti',
      description: 'Натурален мед, прополис и други продукти от пчелина',
      sortOrder: 1
    }
  })

  const equipment = await prisma.category.upsert({
    where: { slug: 'pchelarstvo' },
    update: {},
    create: {
      name: 'За пчелари',
      slug: 'pchelarstvo',
      description: 'Кошери, рамки, центрофуги, облекло и пчеларски инвентар',
      sortOrder: 2
    }
  })

  const products = [
    {
      name: 'Акациев мед 1 кг',
      slug: 'akaciev-med-1-kg',
      description: 'Светъл и нежен акациев мед от собствени пчелини, подходящ за чай, закуска и ежедневна употреба.',
      price: 18,
      stock: 50,
      categoryId: honey.id,
      featured: true
    },
    {
      name: 'Билков мед 1 кг',
      slug: 'bilkov-med-1-kg',
      description: 'Полифлорен мед от разнообразна растителност с плътен аромат и балансиран вкус.',
      price: 16,
      stock: 40,
      categoryId: honey.id,
      featured: true
    },
    {
      name: 'Мед от елда 1 кг',
      slug: 'med-ot-elda-1-kg',
      description: 'Тъмен мед с характерен, наситен вкус и богат аромат.',
      price: 20,
      stock: 30,
      categoryId: honey.id,
      featured: false
    },
    {
      name: 'Прополис 20 г',
      slug: 'propolis-20-g',
      description: 'Чист прополис от пчелина - натурален продукт за домашна употреба.',
      price: 12,
      stock: 25,
      categoryId: honey.id,
      featured: false
    },
    {
      name: 'Кошер Лангстрот',
      slug: 'kosher-langstrot',
      description: 'Полиуретанов кошер Лангстрот с добра изолация, подходящ както за начинаещи, така и за опитни пчелари.',
      price: 120,
      stock: 15,
      categoryId: equipment.id,
      featured: true
    },
    {
      name: 'Пчеларски костюм М',
      slug: 'pchelarski-kostyum-m',
      description: 'Удобен защитен костюм за пчеларство с було и ръкавици.',
      price: 85,
      stock: 20,
      categoryId: equipment.id,
      featured: false
    },
    {
      name: 'Пчеларска дималка',
      slug: 'pchelarska-dimalka',
      description: 'Практична дималка за спокойно обслужване на пчелните семейства.',
      price: 45,
      stock: 18,
      categoryId: equipment.id,
      featured: false
    },
    {
      name: 'Пчеларски нож',
      slug: 'pchelarski-nozh',
      description: 'Остър нож за разпечатване на восъчни пити преди центрофугиране.',
      price: 35,
      stock: 25,
      categoryId: equipment.id,
      featured: false
    },
    {
      name: 'Вилица за рамки',
      slug: 'vilica-za-ramki',
      description: 'Специална пчеларска вилица за разпечатване и работа с рамки.',
      price: 15,
      stock: 30,
      categoryId: equipment.id,
      featured: false
    },
    {
      name: 'Комплект восъчни основи',
      slug: 'komplekt-vosachni-osnovi',
      description: 'Комплект от 5 восъчни основи с високо качество.',
      price: 25,
      stock: 40,
      categoryId: equipment.id,
      featured: false
    }
  ]

  for (const product of products) {
    const saved = await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        ...product,
        shortDescription: product.description,
        status: ProductStatus.ACTIVE,
        seoTitle: `${product.name} | САКИ`,
        seoDescription: product.description
      }
    })

    const imageCount = await prisma.productImage.count({ where: { productId: saved.id } })
    if (imageCount === 0) {
      await prisma.productImage.create({
        data: {
          productId: saved.id,
          url: defaultImage,
          alt: saved.name,
          sortOrder: 0
        }
      })
    }
  }

  await prisma.promotion.upsert({
    where: { slug: 'semejna-pchelina' },
    update: {},
    create: {
      title: 'Мед от семейната ни пчелина',
      slug: 'semejna-pchelina',
      description: 'Специално представяне на натуралния мед от пчелините ни в Долистово и Коркина.',
      discountType: 'PERCENTAGE',
      discountValue: 0,
      active: true,
      bannerText: 'Натурален мед от собствени пчелини',
      categoryId: honey.id
    }
  })

  await prisma.landingPage.upsert({
    where: { slug: 'naturalen-med' },
    update: {},
    create: {
      title: 'Натурален мед от САКИ',
      slug: 'naturalen-med',
      heroTitle: 'Натурален мед от собствени пчелини',
      heroSubtitle: 'Мед от Долистово и Коркина, произведен с грижа към пчелите и природата.',
      ctaText: 'Разгледайте пчелните продукти',
      ctaLink: '/products?category=pchelni-produkti',
      status: 'PUBLISHED',
      seoTitle: 'Натурален мед от САКИ | Дупница',
      seoDescription: 'Натурален пчелен мед от собствени пчелини в Долистово и Коркина.',
      sections: [
        {
          type: 'text',
          title: 'Чист произход',
          body: 'Грижим се за пчелните семейства внимателно и произвеждаме мед без излишни добавки и компромиси.'
        }
      ]
    }
  })
}

main()
  .finally(async () => {
    await prisma.$disconnect()
  })
