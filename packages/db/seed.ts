import bcrypt from 'bcryptjs'
import { PrismaClient, ProductStatus } from '@prisma/client'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

const envPaths = [resolve(process.cwd(), '.env'), resolve(process.cwd(), '../../server/.env')]
const envPath = envPaths.find((candidate) => existsSync(candidate))
if (envPath) {
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const separator = trimmed.indexOf('=')
    if (separator === -1) continue
    const key = trimmed.slice(0, separator).trim()
    const value = trimmed.slice(separator + 1).trim().replace(/^"|"$/g, '')
    if (!process.env[key]) process.env[key] = value
  }
}

const prisma = new PrismaClient()

const defaultImage =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3E%D0%91%D0%B5%D0%B7%20%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%3C/text%3E%3C/svg%3E'

const homepageSettings = {
  'homepage.bg.heroImageUrl': 'https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'homepage.bg.heroTitle': 'Пчеларски магазин САКИ',
  'homepage.bg.heroSubtitle': 'Семеен пчеларски магазин в Дупница с над 20 години опит. Натурален мед от собствени пчелини, пчелни продукти и надеждно оборудване за пчелари.',
  'homepage.bg.heroCtaHoney': 'Пчелни продукти',
  'homepage.bg.heroCtaEquipment': 'Всичко за пчеларя',
  'homepage.bg.aboutTitle': 'За нас',
  'homepage.bg.aboutSubtitle': 'Семейна фирма с над 20 години опит в пчеларството, натуралния мед и пчелните продукти.',
  'homepage.bg.storyTitle': 'Нашата история',
  'homepage.bg.storyText1': 'САКИ е семейна фирма, създадена с любов към пчеларството и чистия, натурален мед. Повече от 20 години се грижим за пчелите си и учим от природата.',
  'homepage.bg.storyText2': 'Започнахме скромно, но останахме верни на най-важното: качество, честност и грижа към природата.',
  'homepage.bg.apiariesTitle': 'Нашите пчелини',
  'homepage.bg.apiariesText1': 'Пчелините ни се намират в селата Долистово и Коркина - места с чиста природа и богато разнообразие от растения.',
  'homepage.bg.apiariesText2': 'Грижим се за всяко пчелно семейство с внимание и отговорност, за да ви предложим чист мед без излишни добавки.',
  'homepage.bg.certificationTitle': 'Сертификация и качество',
  'homepage.bg.certificationText1': 'Медът ни е сертифициран от БАБХ и се произвежда с постоянен контрол върху качеството.',
  'homepage.bg.certificationText2': 'При нас ще намерите пчелни продукти, на които можете да разчитате - чисти, полезни и направени с грижа.',
  'homepage.bg.productsTitle': 'Нашите продукти',
  'homepage.bg.productsSubtitle': 'Мед, пчелни продукти, кошери, рамки, центрофуги и инвентар за ежедневната работа в пчелина.',
  'homepage.bg.contactTitle': 'Свържете се с нас',
  'homepage.bg.contactSubtitle': 'Имате въпрос за мед, оборудване или доставка? Пишете ни - ще ви отговорим възможно най-скоро.',
  'homepage.bg.addressValue': 'Кооперативен пазар, павилион 5, гр. Дупница',
  'homepage.bg.phoneValue': '089 551 7056',
  'homepage.bg.emailValue': 'info@sakimed.com',
  'homepage.bg.websiteValue': 'www.sakimed.com',
  'homepage.bg.facebookValue': 'facebook.com/Saki2008',
  'homepage.bg.workingHoursWeekday': 'Понеделник - Петък: 09:00 - 18:00',
  'homepage.bg.workingHoursSaturday': 'Събота: 09:00 - 14:00',
  'homepage.bg.footerTagline': 'Вашият надежден партньор в пчеларството',
  'homepage.en.heroImageUrl': 'https://images.pexels.com/photos/34593531/pexels-photo-34593531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'homepage.en.heroTitle': 'SAKI Beekeeping Shop',
  'homepage.en.heroSubtitle': 'A family-run beekeeping shop in Dupnitsa with over 20 years of experience. Natural honey from our own apiaries, bee products, and dependable equipment for beekeepers.',
  'homepage.en.heroCtaHoney': 'Bee Products',
  'homepage.en.heroCtaEquipment': 'For Beekeepers',
  'homepage.en.aboutTitle': 'About Us',
  'homepage.en.aboutSubtitle': 'A family business with over 20 years of experience in beekeeping and natural honey production.',
  'homepage.en.storyTitle': 'Our Story',
  'homepage.en.storyText1': 'SAKI is a family-run business built on a genuine love for beekeeping and pure, natural honey. For over 20 years, we have cared for our bees and learned from nature itself.',
  'homepage.en.storyText2': 'We started small, but stayed true to what matters most: quality, honesty, and respect for nature.',
  'homepage.en.apiariesTitle': 'Our Apiaries',
  'homepage.en.apiariesText1': 'Our apiaries are located in Dolistovo and Korkina - areas with clean nature and rich plant diversity.',
  'homepage.en.apiariesText2': 'We care for every colony with attention and responsibility to deliver pure honey with no unnecessary additives.',
  'homepage.en.certificationTitle': 'Certification and Quality',
  'homepage.en.certificationText1': 'Our honey is certified by the Bulgarian Food Safety Agency and produced with consistent quality control.',
  'homepage.en.certificationText2': 'With us, you will find bee products you can trust - natural, beneficial, and made with care.',
  'homepage.en.productsTitle': 'Our Products',
  'homepage.en.productsSubtitle': 'Honey, bee products, hives, frames, extractors, and tools for everyday apiary work.',
  'homepage.en.contactTitle': 'Contact Us',
  'homepage.en.contactSubtitle': 'Have a question about honey, equipment, or delivery? Send us a message and we will reply as soon as possible.',
  'homepage.en.addressValue': 'Cooperative Market, Pavilion 5, Dupnitsa',
  'homepage.en.phoneValue': '089 551 7056',
  'homepage.en.emailValue': 'info@sakimed.com',
  'homepage.en.websiteValue': 'www.sakimed.com',
  'homepage.en.facebookValue': 'facebook.com/Saki2008',
  'homepage.en.workingHoursWeekday': 'Monday - Friday: 09:00 - 18:00',
  'homepage.en.workingHoursSaturday': 'Saturday: 09:00 - 14:00',
  'homepage.en.footerTagline': 'Your trusted partner in beekeeping'
}

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

  const erpProducts = [
    {
      name: 'Мед букет 1кг',
      category: 'HONEY' as const,
      unit: 'PCS' as const,
      sellPriceEur: 6.5,
      costPriceEur: 3.2,
      stockQuantity: 40,
      minStockQuantity: 8,
      notes: 'Основен продукт за магазина'
    },
    {
      name: 'Восъчни основи 1кг',
      category: 'WAX_FOUNDATIONS' as const,
      unit: 'KG' as const,
      sellPriceEur: 15,
      costPriceEur: 10,
      stockQuantity: 25,
      minStockQuantity: 5,
      notes: 'Използва се и при обмен на восък'
    },
    {
      name: 'Храна за пчели',
      category: 'BEEKEEPING_EQUIPMENT' as const,
      unit: 'PACKAGE' as const,
      sellPriceEur: 9,
      costPriceEur: 6.2,
      stockQuantity: 30,
      minStockQuantity: 6
    },
    {
      name: 'Буркан 1кг',
      category: 'PACKAGING' as const,
      unit: 'PCS' as const,
      sellPriceEur: 0.45,
      costPriceEur: 0.28,
      stockQuantity: 200,
      minStockQuantity: 40
    },
    {
      name: 'Пчеларски нож',
      category: 'BEEKEEPING_EQUIPMENT' as const,
      unit: 'PCS' as const,
      sellPriceEur: 18,
      costPriceEur: 11,
      stockQuantity: 12,
      minStockQuantity: 3
    }
  ]

  const admin = await prisma.user.findUnique({ where: { email: adminEmail } })
  for (const product of erpProducts) {
    const exists = await prisma.erpProduct.findFirst({ where: { name: product.name } })
    if (!exists) {
      const saved = await prisma.erpProduct.create({ data: product })
      if (admin && saved.stockQuantity.gt(0)) {
        await prisma.erpInventoryMovement.create({
          data: {
            productId: saved.id,
            movementType: 'DELIVERY',
            quantityChange: saved.stockQuantity,
            referenceType: 'erp_seed',
            referenceId: saved.id,
            notes: 'Начална наличност от seed',
            createdById: admin.id
          }
        })
      }
    }
  }

  for (const [key, value] of Object.entries(homepageSettings)) {
    await prisma.erpSetting.upsert({
      where: { key },
      update: {},
      create: { key, value }
    })
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect()
  })
