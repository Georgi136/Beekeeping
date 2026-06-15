import bcrypt from 'bcryptjs'
import { PrismaClient, ProductStatus } from '../lib/prismaClient'
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
    create: { email: adminEmail, passwordHash, name: 'Администратор' }
  })

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
