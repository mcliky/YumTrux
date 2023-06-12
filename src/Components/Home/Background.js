import React from 'react'
import style from '../../Styles/Background.module.css'
import vitaminSalad from '../images/salad-with-vitamins-body-weight-maintenance.png'
import traditionalMexican from '../images/traditional-mexican-tacos-with-meat-vegetables-isolated-white-background.png'
import phillyCheeseSteak from '../images/philly-cheesesteak-sandwich-with-beef-cheesegreen-pepers-caramelized-onion.png'
import indianButterChicken from '../images/indian-butter-chicken-isolated-white-background.png'
import mockup from '../images/mockuuups-jt2gf8W2UL8KuQ69zFvL9e 1.png'

export default function Background() {
  return (
    <div className={style.backgroundParent}>
      <div className={style.leftParent}>
        <img src={vitaminSalad} className={style.outerImgLeft} />
        <img src={traditionalMexican} className={style.innerImgLeft} />
      </div>
      <div>
      <img src={mockup} className={style.imgOverlay} />
      </div>
      <div className={style.rightParent}>
        <img src={phillyCheeseSteak} className={style.outerImgRight} />
        <img src={indianButterChicken} className={style.innerImgRight} />
      </div>
    </div>
  )
}
