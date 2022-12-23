const dataTime=document.querySelector(".dataTime")
const data=document.querySelector(".data")
const body= document.querySelector("body")
const h3=document.querySelector("h3")
const date=new Date()
const year=date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const montharr=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]
let weekDate=date.getDay()
let week=["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]

setInterval(()=> {
    const date=new Date()
    const hours=date.getHours()
    const minute=date.getMinutes()
    const seconds=date.getSeconds()
    dataTime.innerHTML=` ${hours<10 ?"0"+hours : hours} :  ${minute<10 ?"0"+minute : minute }:  ${seconds<10 ?"0"+seconds : seconds}`
    data.textContent=`${year}-${(month+1)<10 ? '0'+(month+1):(month+1)}-${day<10 ?'0'+ day:day}  ${week[weekDate]}`
    h3.textContent=`${montharr[month]}`
}, 1000)