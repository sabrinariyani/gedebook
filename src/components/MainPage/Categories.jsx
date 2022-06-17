import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Novel",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Biografi",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Tafsir",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Kamus",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Buku Ilmiah",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Puisi Sajak",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Karya Ilmiah",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Antologi",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Teknologi",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Atlas",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Buku Digital",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
