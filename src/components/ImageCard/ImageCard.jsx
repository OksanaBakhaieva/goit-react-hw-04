import css from './ImageCard.module.css';

export default function ImageCard({ picture, onImageClick }) {
    const imgData = {
    imgSrc: picture.urls.regular,
    imgDescription: picture.description,
    imgAlt: picture.alt_description,
  };
    return (
        <>
            <div className={css.imgCardContainer}>
            <img className={css.imgItem} onClick={()=>onImageClick(imgData)}
                src={picture.urls.small}
                alt={picture.alt_description} />
        </div>
        <div className={css.description}>
            <ul>
               <li className={css.descrItem}>Likes:<span className={descr-span}>{picture.likes}</span></li> 
               <li className={css.descrItem}>Author:<span className={descr-span}>{picture.user.name}</span></li>  
            </ul>
        </div>
        </>
  );
};
