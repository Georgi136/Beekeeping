import { useLanguage } from '../i18n/LanguageContext'

type Locale = 'bg' | 'en'

type Copy = {
  eyebrow: string
  headline: string
  subheadline: string
  trust: string[]
  primaryCta: string
  secondaryCta: string
  note: string
  disclaimer: string
  benefitsTitle: string
  benefits: Array<{ title: string; text: string }>
  useCasesTitle: string
  useCases: string[]
  howToUseTitle: string
  howToUse: string[]
  faqTitle: string
  faq: Array<{ question: string; answer: string }>
  imageAltHero: string
  imageAltOpenJar: string
  imageAltPackaging: string
}

const copy: Record<Locale, Copy> = {
  bg: {
    eyebrow: 'Прополисов мехлем по семейна рецепта',
    headline: 'Натурална грижа за кожа, която има нужда от спокойствие.',
    subheadline:
      'Прополисов мехлем САКИ е създаден за локална козметична грижа при суха, раздразнена и проблемна кожа - по семейна рецепта от САКИ, семейна пчеларска фирма с над 20 години опит.',
    trust: ['По семейна рецепта', '20+ години пчеларски опит', 'Локален производител от Дупница', 'Пчелен продукт за ежедневна грижа'],
    primaryCta: 'Поръчай мехлем',
    secondaryCta: 'Пиши във Facebook',
    note: 'Подходящ за дома, чантата и семейната аптечка.',
    disclaimer: 'Не е лекарствен продукт. Не заменя консултация със специалист.',
    benefitsTitle: 'Защо хората го избират',
    benefits: [
      {
        title: 'За суха и раздразнена кожа',
        text: 'Подходящ за локална грижа върху участъци, които се усещат сухи, опънати или раздразнени.'
      },
      {
        title: 'С прополис',
        text: 'Прополисът е един от най-разпознаваемите пчелни продукти, ценен в традиционната грижа за кожата.'
      },
      {
        title: 'Лесен за употреба',
        text: 'Нанася се локално в малко количество, когато кожата има нужда от допълнителна грижа.'
      }
    ],
    useCasesTitle: 'Подходящ за',
    useCases: [
      'Сухи участъци по ръце, лакти, пети или лице',
      'Кожа, която се усеща опъната или раздразнена',
      'Грижа след излагане на студ, вятър или слънце',
      'Ежедневна козметична грижа с продукт от пчелен произход'
    ],
    howToUseTitle: 'Как се използва',
    howToUse: [
      'Почисти и подсуши кожата.',
      'Нанеси малко количество локално.',
      'Втрий нежно до тънък защитен слой.',
      'Повтаряй при нужда. Прекрати употреба при дискомфорт.'
    ],
    faqTitle: 'Често задавани въпроси',
    faq: [
      {
        question: 'За какво е подходящ?',
        answer: 'За локална козметична грижа при суха, раздразнена и проблемна кожа. Не е заместител на медицински преглед или лечение.'
      },
      {
        question: 'Мога ли да го използвам върху лице?',
        answer: 'Може да се използва локално в малко количество. Направи тест върху малък участък, особено ако кожата ти е чувствителна.'
      },
      {
        question: 'Подходящ ли е при алергия към пчелни продукти?',
        answer: 'Не се препоръчва при алергия към прополис, мед или други пчелни продукти. При съмнение се консултирай със специалист.'
      }
    ],
    imageAltHero: 'Прополисов мехлем САКИ в малка стъклена опаковка',
    imageAltOpenJar: 'Прополисов мехлем САКИ с отворена опаковка',
    imageAltPackaging: 'Прополисов мехлем САКИ в детайлна опаковка'
  },
  en: {
    eyebrow: 'Propolis ointment made from a family recipe',
    headline: 'Natural skin care when your skin needs calm.',
    subheadline:
      'SAKI Propolis Ointment is made for local cosmetic care for dry, irritated, and problematic skin - from a family recipe by SAKI, a beekeeping family business with 20+ years of experience.',
    trust: ['Family recipe', '20+ years of beekeeping experience', 'Local producer from Dupnitsa', 'Bee-based everyday care'],
    primaryCta: 'Order the ointment',
    secondaryCta: 'Message on Facebook',
    note: 'Good for home, bag, and family first-aid shelf.',
    disclaimer: 'Not a medicinal product. It does not replace professional advice.',
    benefitsTitle: 'Why people choose it',
    benefits: [
      {
        title: 'For dry and irritated skin',
        text: 'Suitable for local care on areas that feel dry, tight, or irritated.'
      },
      {
        title: 'With propolis',
        text: 'Propolis is one of the best-known bee products, valued in traditional skin care.'
      },
      {
        title: 'Easy to use',
        text: 'Apply a small amount locally whenever your skin needs extra care.'
      }
    ],
    useCasesTitle: 'Suitable for',
    useCases: [
      'Dry spots on hands, elbows, heels, or face',
      'Skin that feels tight or irritated',
      'Care after exposure to cold, wind, or sun',
      'Everyday cosmetic care with a bee-derived product'
    ],
    howToUseTitle: 'How to use',
    howToUse: [
      'Clean and dry the skin.',
      'Apply a small amount locally.',
      'Gently rub in until a thin protective layer forms.',
      'Repeat as needed. Stop use if discomfort appears.'
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        question: 'What is it suitable for?',
        answer: 'For local cosmetic care of dry, irritated, and problematic skin. It is not a substitute for a medical exam or treatment.'
      },
      {
        question: 'Can I use it on my face?',
        answer: 'Yes, in a small local amount. Test on a small area first, especially if your skin is sensitive.'
      },
      {
        question: 'Is it suitable if I am allergic to bee products?',
        answer: 'It is not recommended if you are allergic to propolis, honey, or other bee products. If in doubt, consult a specialist.'
      }
    ],
    imageAltHero: 'SAKI propolis ointment in a small glass jar',
    imageAltOpenJar: 'SAKI propolis ointment with an open container',
    imageAltPackaging: 'SAKI propolis ointment packaging detail'
  }
}

const productPhotos = {
  hero: '/assets/photos/propolisov-mehlem-hero.jpg',
  openJar: '/assets/photos/propolisov-mehlem-open-jar.jpg',
  packaging: '/assets/photos/propolisov-mehlem-packaging.jpg'
}

export default function PropolisMehlemFeature() {
  const { language } = useLanguage()
  const locale = language === 'en' ? 'en' : 'bg'
  const text = copy[locale]

  return (
    <section className="propolis-feature" id="propolisov-mehlem" aria-labelledby="propolis-title">
      <div className="propolis-shell">
        <div className="propolis-hero">
          <div className="propolis-copy">
            <p className="propolis-eyebrow">{text.eyebrow}</p>
            <h1 id="propolis-title">{text.headline}</h1>
            <p className="propolis-lead">{text.subheadline}</p>
            <div className="propolis-trust" aria-label={locale === 'bg' ? 'Основни предимства' : 'Key trust points'}>
              {text.trust.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="propolis-actions">
              <a href="/#contact" className="btn btn-primary">{text.primaryCta}</a>
              <a href="https://www.facebook.com/Saki2008/" className="btn btn-secondary" target="_blank" rel="noreferrer">{text.secondaryCta}</a>
            </div>
            <p className="propolis-note">{text.note}</p>
          </div>

          <div className="propolis-media">
            <div className="propolis-main-image">
              <img src={productPhotos.hero} alt={text.imageAltHero} />
            </div>
            <div className="propolis-mini-grid">
              <img src={productPhotos.openJar} alt={text.imageAltOpenJar} loading="lazy" decoding="async" />
              <img src={productPhotos.packaging} alt={text.imageAltPackaging} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>

        <div className="propolis-benefits">
          <h4>{text.benefitsTitle}</h4>
          <div className="propolis-benefit-grid">
            {text.benefits.map((benefit) => (
              <article key={benefit.title} className="propolis-benefit">
                <h5>{benefit.title}</h5>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="propolis-details">
          <div className="propolis-panel">
            <h4>{text.useCasesTitle}</h4>
            <ul>
              {text.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="propolis-panel">
            <h4>{text.howToUseTitle}</h4>
            <ol>
              {text.howToUse.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="propolis-panel faq-panel">
            <h4>{text.faqTitle}</h4>
            <div className="faq-list">
              {text.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="propolis-footnote">
          <p>{text.disclaimer}</p>
          <p>{locale === 'bg' ? 'Не използвайте при алергия към прополис, мед или други пчелни продукти.' : 'Do not use it if you are allergic to propolis, honey, or other bee products.'}</p>
        </div>
      </div>

      <style>{`
        .propolis-feature {
          padding: 0 0 3rem;
        }

        .propolis-shell {
          display: grid;
          gap: 1.25rem;
          padding: clamp(1rem, 2.5vw, 1.5rem);
          border: 1px solid #eadfc8;
          border-radius: 1rem;
          background:
            linear-gradient(180deg, rgba(255, 248, 231, 0.96) 0%, rgba(255, 255, 255, 0.98) 55%),
            radial-gradient(circle at top right, rgba(245, 158, 11, 0.08), transparent 42%);
          box-shadow: var(--shadow-sm);
        }

        .propolis-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 1.25rem;
          align-items: center;
        }

        .propolis-copy h1 {
          font-size: clamp(1.7rem, 2.4vw, 2.7rem);
          line-height: 1.08;
          color: var(--color-secondary);
          margin: 0.35rem 0 0.9rem;
        }

        .propolis-eyebrow {
          display: inline-flex;
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          color: #7c4b07;
          font-size: 0.78rem;
          letter-spacing: 0.02em;
          font-weight: 900;
          text-transform: uppercase;
          margin: 0;
        }

        .propolis-lead {
          color: var(--color-text);
          font-size: 1.02rem;
          line-height: 1.7;
          max-width: 56ch;
          margin: 0 0 1rem;
        }

        .propolis-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.1rem;
        }

        .propolis-trust span {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.8rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid #e6d9be;
          color: #5d461f;
          font-size: 0.88rem;
          font-weight: 800;
        }

        .propolis-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .propolis-actions a {
          text-decoration: none;
        }

        .propolis-note {
          margin: 0;
          color: #6b5a3a;
          font-weight: 700;
        }

        .propolis-media {
          display: grid;
          gap: 0.75rem;
        }

        .propolis-main-image {
          border-radius: 1rem;
          overflow: hidden;
          background: #f8f3e8;
          border: 1px solid #eadfc8;
        }

        .propolis-main-image img,
        .propolis-mini-grid img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .propolis-main-image img {
          aspect-ratio: 4 / 3;
        }

        .propolis-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .propolis-mini-grid img {
          aspect-ratio: 1 / 1;
          border-radius: 0.9rem;
          border: 1px solid #eadfc8;
        }

        .propolis-benefits,
        .propolis-details,
        .propolis-footnote {
          display: grid;
          gap: 0.85rem;
        }

        .propolis-benefits h4,
        .propolis-panel h4 {
          margin: 0;
          color: var(--color-secondary);
          font-size: 1.2rem;
        }

        .propolis-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.85rem;
        }

        .propolis-benefit {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid #eadfc8;
          border-radius: 0.9rem;
          padding: 1rem;
          box-shadow: 0 1px 2px rgba(26, 42, 28, 0.04);
        }

        .propolis-benefit h5 {
          margin: 0 0 0.45rem;
          color: #0f2f1d;
          font-size: 1rem;
        }

        .propolis-benefit p,
        .propolis-panel li,
        .propolis-footnote p,
        .faq-list p {
          color: var(--color-text);
          line-height: 1.7;
          margin: 0;
        }

        .propolis-details {
          grid-template-columns: 1fr 1fr 1.15fr;
        }

        .propolis-panel {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #eadfc8;
          border-radius: 0.9rem;
          padding: 1rem 1.05rem;
        }

        .propolis-panel ul,
        .propolis-panel ol {
          margin: 0.85rem 0 0;
          padding-left: 1.1rem;
          display: grid;
          gap: 0.7rem;
        }

        .faq-list {
          display: grid;
          gap: 0.65rem;
          margin-top: 0.85rem;
        }

        .faq-list details {
          border: 1px solid #eadfc8;
          border-radius: 0.75rem;
          background: #fff;
          overflow: hidden;
        }

        .faq-list summary {
          list-style: none;
          cursor: pointer;
          padding: 0.9rem 1rem;
          font-weight: 800;
          color: #0f2f1d;
        }

        .faq-list summary::-webkit-details-marker {
          display: none;
        }

        .faq-list details p {
          padding: 0 1rem 1rem;
        }

        .propolis-footnote {
          padding-top: 0.25rem;
          border-top: 1px solid #eadfc8;
        }

        @media (max-width: 980px) {
          .propolis-hero,
          .propolis-details,
          .propolis-benefit-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .propolis-shell {
            padding: 0.9rem;
          }

          .propolis-actions {
            flex-direction: column;
          }

          .propolis-actions a {
            width: 100%;
            justify-content: center;
          }

          .propolis-mini-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
