import styles from './ResultItem.module.css'
import cardImgPlaceholder from '../../assets/images/cardImgPlaceholder.svg'
import { parseDate } from '../../utils/parseDate'
import { parseXml } from '../../utils/parseXml'
import { ResultItemCategories } from './ResultItemCategory'

function ResultItem({ data }) {
  return (
    <li className={styles.resultItem}>
      <div className={styles.cardHeader}>
        <div className={styles.sourceBlock}>
          <span className={styles.date}>{parseDate(data.issueDate)}</span>
          <span className={styles.source}>{data.source.name}</span>
        </div>
        <h1 className={styles.cardTitle}>{data.title.text}</h1>
        <ResultItemCategories
          isAnnouncement={data.attributes.isAnnouncement}
          isDigest={data.attributes.isDigest}
          isTechNews={data.attributes.isTechNews}
        />
      </div>
      <div><img src={cardImgPlaceholder} alt="cardBanner" /></div>
      <div className={styles.cardText}>
        {parseXml(data.content.markup)}
      </div>
      <div className={styles.cardFooter}>
        <a className={styles.readMore} href={data.url === '' ? '/notFound' : data.url} target="_blank">Читать в источнике</a>
        <div className={styles.wordCount}>{data.attributes.wordCount} слова</div>
      </div>
    </li>
  )
}

export { ResultItem }