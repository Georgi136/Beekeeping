import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

type IconName = 'location' | 'phone' | 'mail' | 'facebook' | 'instagram' | 'tiktok'

const footerCopy = {
  bg: {
    logoAlt: 'Лого на САКИ',
    description: 'Семеен пчеларски магазин в Дупница с натурален мед, пчелни продукти и оборудване за пчелари.',
    quickLinks: 'Бързи връзки',
    contact: 'Контакти',
    address: 'Кооперативен пазар, павилион 5, Дупница',
    admin: 'Админ',
    locationLabel: 'Адрес',
    phoneLabel: 'Телефон',
    mailLabel: 'Имейл',
    socials: 'Социални мрежи',
    city: 'Дупница'
  },
  en: {
    logoAlt: 'SAKI logo',
    description: 'A family beekeeping shop in Dupnitsa with natural honey, bee products, and equipment for beekeepers.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    address: 'Cooperative Market, Pavilion 5, Dupnitsa',
    admin: 'Admin',
    locationLabel: 'Address',
    phoneLabel: 'Phone',
    mailLabel: 'Email',
    socials: 'Socials',
    city: 'Dupnitsa'
  }
}

function FooterIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, JSX.Element> = {
    location: (
      <>
        <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4h-4V7a1 1 0 0 1 1-1h3V2Z" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r="0.7" />
      </>
    ),
    tiktok: <path d="M14 3v10.2a4.2 4.2 0 1 1-4.2-4.2c.4 0 .8.1 1.2.2v3.1a1.5 1.5 0 1 0 1 1.4V3h2Zm0 0c.5 2.5 2 4.1 4.5 4.4v3.1A7.7 7.7 0 0 1 14 8.9" />
  }

  return (
    <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export default function Footer() {
  const { t, language, storefrontSettings } = useLanguage()
  const copy = footerCopy[language]
  const phone = storefrontSettings.supportPhone || '089 551 7056'
  const email = storefrontSettings.supportEmail || 'info@sakimed.com'
  const phoneHref = phone.replace(/[^\d+]/g, '')
  const shopLinks = [
    { label: language === 'bg' ? 'Начало' : 'Home', to: '/' },
    { label: language === 'bg' ? 'Магазин' : 'Shop', to: '/products' },
    { label: language === 'bg' ? 'Количка' : 'Cart', to: '/cart' },
    { label: language === 'bg' ? 'Поръчка' : 'Checkout', to: '/checkout' }
  ]
  const socialLinks = [
    { name: 'facebook' as const, label: 'Facebook', href: storefrontSettings.facebookUrl },
    { name: 'instagram' as const, label: 'Instagram', href: storefrontSettings.instagramUrl },
    { name: 'tiktok' as const, label: 'TikTok', href: storefrontSettings.tiktokUrl }
  ].filter((social) => social.href)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="SAKI">
              <img src="/saki-logo.png" alt={copy.logoAlt} />
            </Link>
            <p>{copy.description}</p>
          </div>

          <nav className="footer-links" aria-label={copy.quickLinks}>
            <h4>{copy.quickLinks}</h4>
            <ul className="footer-link-list">
              {shopLinks.map((link) => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}
              <li><a href="/#about">{t('navAbout')}</a></li>
              <li><a href="/#contact">{t('navContact')}</a></li>
              <li><Link to="/admin" rel="nofollow" className="footer-admin-link">{copy.admin}</Link></li>
            </ul>
          </nav>

          <address className="footer-contact">
            <h4>{copy.contact}</h4>
            <ul>
              <li>
                <FooterIcon name="location" />
                <span><small>{copy.locationLabel}</small>{copy.address}</span>
              </li>
              <li>
                <FooterIcon name="phone" />
                <span><small>{copy.phoneLabel}</small><a href={`tel:${phoneHref}`}>{phone}</a></span>
              </li>
              <li>
                <FooterIcon name="mail" />
                <span><small>{copy.mailLabel}</small><a href={`mailto:${email}`}>{email}</a></span>
              </li>
            </ul>
            {socialLinks.length > 0 && <div className="footer-socials" aria-label={copy.socials}>
              <span>{copy.socials}</span>
              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <FooterIcon name={social.name} />
                  </a>
                ))}
              </div>
            </div>}
          </address>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} САКИ - {copy.city}. {t('footerRights')}</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-secondary);
          color: var(--color-white);
          padding: 4.5rem 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: minmax(260px, 1.5fr) minmax(180px, 0.8fr) minmax(280px, 1fr);
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          margin-bottom: 1rem;
          text-decoration: none;
        }

        .footer-logo img {
          height: 76px;
          width: auto;
          object-fit: contain;
        }

        .footer-brand p {
          max-width: 440px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 0.98rem;
          line-height: 1.7;
          margin: 0;
        }

        .footer-links h4,
        .footer-contact h4 {
          font-size: 1rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 0 1.1rem;
          color: var(--color-white);
        }

        .footer-links ul,
        .footer-contact ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link-list {
          display: grid;
          gap: 0.65rem;
        }

        .footer-links li {
          margin: 0;
        }

        .footer-links a,
        .footer-contact a {
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a {
          display: inline-block;
          padding: 0.2rem 0;
        }

        .footer-links a:hover,
        .footer-contact a:hover {
          color: var(--color-primary);
        }

        .footer-admin-link {
          color: rgba(255, 255, 255, 0.34) !important;
          font-size: 0.85rem;
        }

        .footer-contact {
          font-style: normal;
        }

        .footer-contact li {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 0.85rem;
          align-items: start;
          color: rgba(255, 255, 255, 0.78);
          margin-bottom: 0.9rem;
          font-size: 0.95rem;
          line-height: 1.45;
        }

        .footer-contact small {
          display: block;
          color: rgba(255, 255, 255, 0.52);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          margin-bottom: 0.15rem;
          text-transform: uppercase;
        }

        .footer-icon {
          width: 38px;
          height: 38px;
          padding: 9px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          color: var(--color-primary);
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          background: rgba(255, 255, 255, 0.05);
        }

        .footer-socials {
          margin-top: 1.35rem;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .footer-socials > span {
          display: block;
          color: rgba(255, 255, 255, 0.52);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          margin-bottom: 0.7rem;
          text-transform: uppercase;
        }

        .footer-social-links {
          display: flex;
          gap: 0.7rem;
          align-items: center;
        }

        .footer-social-links a {
          display: inline-flex;
          border-radius: 999px;
        }

        .footer-social-links a:hover .footer-icon {
          background: var(--color-primary);
          color: var(--color-white);
          border-color: var(--color-primary);
        }

        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.875rem;
          margin: 0;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-logo img {
            height: 68px;
          }
        }
      `}</style>
    </footer>
  )
}
