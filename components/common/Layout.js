import Meta from '@/components/common/Meta'
import {useWordPressContext} from '@/components/common/WordPressProvider'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import {seoPropTypes} from '@/functions/getPagePropTypes'
import {BlogJsonLd, NextSeo} from 'next-seo'
import PropTypes from 'prop-types'
import {useMemo} from 'react'

/**
 * Render the Layout component.
 *
 * @author WebDevStudios
 * @param  {object}  props           The component attributes as props.
 * @param  {any}     props.children  Child component(s) to render.
 * @param  {object}  props.seo       Yoast SEO data from WordPress.
 * @param  {boolean} props.hasJsonLd Whether to render BlogJsonLd component.
 * @return {Element}                 The Layout component.
 */
export default function Layout({children, seo, hasJsonLd}) {
  const {menus} = useWordPressContext()
  const memoizedMenues = useMemo(() => menus, [menus])
  return (
    <>
      <NextSeo
        title={seo?.title}
        description={seo?.metaDesc}
        openGraph={{
          title: seo?.title,
          description: seo?.metaDesc,
          images: [{url: seo?.opengraphImage?.sourceUrl}],
          url: seo?.canonical
        }}
        nofollow={'follow' !== seo?.metaRobotsNofollow}
        noindex={'index' !== seo?.metaRobotsNoindex}
      />
      {!!hasJsonLd && (
        <BlogJsonLd
          url={seo?.canonical}
          title={seo?.title}
          images={[seo?.opengraphImage?.sourceUrl]}
          datePublished={seo?.opengraphPublishedTime}
          dateModified={seo?.opengraphModifiedTime}
          authorName={seo?.opengraphAuthor}
          description={seo?.metaDesc}
        />
      )}
      <Meta />
      <Header
        menu={memoizedMenues}
        search={<AlgoliaSearch useHistory={true} usePlaceholder={true} />}
      />
      <main id="page-content">{children}</main>
      <Footer
        social={seo?.social}
        siteTitle={seo?.siteTitle}
        menu={menus?.footer_menu}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  hasJsonLd: PropTypes.bool,
  ...seoPropTypes
}
