import _ from "lodash";

export interface Country {
  name: string;
  image: string;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/flags/*.{jpg,jpeg,png,svg}", { eager: true });

const fakers = {
  fakeCountries() {
    const countries: Array<Country> = [
      {
        name: "پلی‌نزی فرانسه",
        image: imageAssets["/src/assets/images/flags/pf.svg"].default,
      },
      {
        name: "سن مارتن",
        image: imageAssets["/src/assets/images/flags/mf.svg"].default,
      },
      {
        name: "ونزوئلا",
        image: imageAssets["/src/assets/images/flags/ve.svg"].default,
      },
      {
        name: "رئونیون",
        image: imageAssets["/src/assets/images/flags/re.svg"].default,
      },
      {
        name: "السالوادور",
        image: imageAssets["/src/assets/images/flags/sv.svg"].default,
      },
      {
        name: "دومینیکا",
        image: imageAssets["/src/assets/images/flags/dm.svg"].default,
      },
      {
        name: "جبل‌الطارق",
        image: imageAssets["/src/assets/images/flags/gi.svg"].default,
      },
      {
        name: "کنیا",
        image: imageAssets["/src/assets/images/flags/ke.svg"].default,
      },
      {
        name: "برزیل",
        image: imageAssets["/src/assets/images/flags/br.svg"].default,
      },
      {
        name: "مالدیو",
        image: imageAssets["/src/assets/images/flags/mv.svg"].default,
      },
      {
        name: "ایالات متحده",
        image: imageAssets["/src/assets/images/flags/us.svg"].default,
      },
      {
        name: "جزایر کوک",
        image: imageAssets["/src/assets/images/flags/ck.svg"].default,
      },
      {
        name: "نیوئه",
        image: imageAssets["/src/assets/images/flags/nu.svg"].default,
      },
      {
        name: "سیشل",
        image: imageAssets["/src/assets/images/flags/sc.svg"].default,
      },
      {
        name: "جمهوری آفریقای مرکزی",
        image: imageAssets["/src/assets/images/flags/cf.svg"].default,
      },
      {
        name: "توکلائو",
        image: imageAssets["/src/assets/images/flags/tk.svg"].default,
      },
      {
        name: "وانواتو",
        image: imageAssets["/src/assets/images/flags/vu.svg"].default,
      },
      {
        name: "گامبیا",
        image: imageAssets["/src/assets/images/flags/gm.svg"].default,
      },
      {
        name: "گویان",
        image: imageAssets["/src/assets/images/flags/gy.svg"].default,
      },
      {
        name: "جزایر فالکلند",
        image: imageAssets["/src/assets/images/flags/fk.svg"].default,
      },
      {
        name: "بلژیک",
        image: imageAssets["/src/assets/images/flags/be.svg"].default,
      },
      {
        name: "صحرای غربی",
        image: imageAssets["/src/assets/images/flags/eh.svg"].default,
      },
      {
        name: "ترکیه",
        image: imageAssets["/src/assets/images/flags/tr.svg"].default,
      },
      {
        name: "سنت وینسنت و گرنادین‌ها",
        image: imageAssets["/src/assets/images/flags/vc.svg"].default,
      },
      {
        name: "پاکستان",
        image: imageAssets["/src/assets/images/flags/pk.svg"].default,
      },
      {
        name: "جزایر الند",
        image: imageAssets["/src/assets/images/flags/ax.svg"].default,
      },
      {
        name: "ایران",
        image: imageAssets["/src/assets/images/flags/ir.svg"].default,
      },
      {
        name: "اندونزی",
        image: imageAssets["/src/assets/images/flags/id.svg"].default,
      },
      {
        name: "نیوزیلند",
        image: imageAssets["/src/assets/images/flags/nz.svg"].default,
      },
      {
        name: "افغانستان",
        image:
          imageAssets["/src/assets/images/flags/Flag_of_the_Taliban.svg"]
            .default,
      },
      {
        name: "گوآم",
        image: imageAssets["/src/assets/images/flags/gu.svg"].default,
      },
      {
        name: "آلبانی",
        image: imageAssets["/src/assets/images/flags/al.svg"].default,
      },
      {
        name: "جمهوری دموکراتیک کنگو",
        image: imageAssets["/src/assets/images/flags/cd.svg"].default,
      },
      {
        name: "ساحل عاج",
        image: imageAssets["/src/assets/images/flags/ci.svg"].default,
      },
      {
        name: "سودان",
        image: imageAssets["/src/assets/images/flags/sd.svg"].default,
      },
      {
        name: "تیمور شرقی",
        image: imageAssets["/src/assets/images/flags/tl.svg"].default,
      },
      {
        name: "لوکزامبورگ",
        image: imageAssets["/src/assets/images/flags/lu.svg"].default,
      },
      {
        name: "عربستان سعودی",
        image: imageAssets["/src/assets/images/flags/sa.svg"].default,
      },
      {
        name: "کامبوج",
        image: imageAssets["/src/assets/images/flags/kh.svg"].default,
      },
      {
        name: "نپال",
        image: imageAssets["/src/assets/images/flags/np.svg"].default,
      },
      {
        name: "گویان فرانسه",
        image: imageAssets["/src/assets/images/flags/gf.svg"].default,
      },
      {
        name: "مالزی",
        image: imageAssets["/src/assets/images/flags/my.svg"].default,
      },
      {
        name: "رواندا",
        image: imageAssets["/src/assets/images/flags/rw.svg"].default,
      },
      {
        name: "تایلند",
        image: imageAssets["/src/assets/images/flags/th.svg"].default,
      },
      {
        name: "جنوبگان",
        image: imageAssets["/src/assets/images/flags/aq.svg"].default,
      },
      {
        name: "اردن",
        image: imageAssets["/src/assets/images/flags/jo.svg"].default,
      },
      {
        name: "سوئیس",
        image: imageAssets["/src/assets/images/flags/ch.svg"].default,
      },
      {
        name: "کومور",
        image: imageAssets["/src/assets/images/flags/km.svg"].default,
      },
      {
        name: "کوزوو",
        image: imageAssets["/src/assets/images/flags/xk.svg"].default,
      },
      {
        name: "جزیره من",
        image: imageAssets["/src/assets/images/flags/im.svg"].default,
      },
      {
        name: "مونته‌نگرو",
        image: imageAssets["/src/assets/images/flags/me.svg"].default,
      },
      {
        name: "هنگ کنگ",
        image: imageAssets["/src/assets/images/flags/hk.svg"].default,
      },
      {
        name: "جرزی",
        image: imageAssets["/src/assets/images/flags/je.svg"].default,
      },
      {
        name: "تاجیکستان",
        image: imageAssets["/src/assets/images/flags/tj.svg"].default,
      },
      {
        name: "بلغارستان",
        image: imageAssets["/src/assets/images/flags/bg.svg"].default,
      },
      {
        name: "مصر",
        image: imageAssets["/src/assets/images/flags/eg.svg"].default,
      },
      {
        name: "مالاوی",
        image: imageAssets["/src/assets/images/flags/mw.svg"].default,
      },
      {
        name: "کیپ ورد",
        image: imageAssets["/src/assets/images/flags/cv.svg"].default,
      },
      {
        name: "بنین",
        image: imageAssets["/src/assets/images/flags/bj.svg"].default,
      },
      {
        name: "مراکش",
        image: imageAssets["/src/assets/images/flags/ma.svg"].default,
      },
      {
        name: "ایرلند",
        image: imageAssets["/src/assets/images/flags/ie.svg"].default,
      },
      {
        name: "مولداوی",
        image: imageAssets["/src/assets/images/flags/md.svg"].default,
      },
      {
        name: "دانمارک",
        image: imageAssets["/src/assets/images/flags/dk.svg"].default,
      },
      {
        name: "ترکمنستان",
        image: imageAssets["/src/assets/images/flags/tm.svg"].default,
      },
      {
        name: "میکرونزی",
        image: imageAssets["/src/assets/images/flags/fm.svg"].default,
      },
      {
        name: "موناکو",
        image: imageAssets["/src/assets/images/flags/mc.svg"].default,
      },
      {
        name: "باربادوس",
        image: imageAssets["/src/assets/images/flags/bb.svg"].default,
      },
      {
        name: "الجزایر",
        image: imageAssets["/src/assets/images/flags/dz.svg"].default,
      },
      {
        name: "سرزمین های جنوبی فرانسه و جنوبگانی",
        image: imageAssets["/src/assets/images/flags/tf.svg"].default,
      },
      {
        name: "اریتره",
        image: imageAssets["/src/assets/images/flags/er.svg"].default,
      },
      {
        name: "لسوتو",
        image: imageAssets["/src/assets/images/flags/ls.svg"].default,
      },
      {
        name: "تانزانیا",
        image: imageAssets["/src/assets/images/flags/tz.svg"].default,
      },
      {
        name: "مالی",
        image: imageAssets["/src/assets/images/flags/ml.svg"].default,
      },
      {
        name: "نیجر",
        image: imageAssets["/src/assets/images/flags/ne.svg"].default,
      },
      {
        name: "آندورا",
        image: imageAssets["/src/assets/images/flags/ad.svg"].default,
      },
      {
        name: "پادشاهی متحده",
        image: imageAssets["/src/assets/images/flags/gb.svg"].default,
      },
      {
        name: "آلمان",
        image: imageAssets["/src/assets/images/flags/de.svg"].default,
      },
      {
        name: "جزایر ویرجین ایالات متحده",
        image: imageAssets["/src/assets/images/flags/vi.svg"].default,
      },
      {
        name: "سومالی",
        image: imageAssets["/src/assets/images/flags/so.svg"].default,
      },
      {
        name: "سنت مارتن",
        image: imageAssets["/src/assets/images/flags/sx.svg"].default,
      },
      {
        name: "کامرون",
        image: imageAssets["/src/assets/images/flags/cm.svg"].default,
      },
      {
        name: "جمهوری دومینیکن",
        image: imageAssets["/src/assets/images/flags/do.svg"].default,
      },
      {
        name: "گینه",
        image: imageAssets["/src/assets/images/flags/gn.svg"].default,
      },
      {
        name: "نامیبیا",
        image: imageAssets["/src/assets/images/flags/na.svg"].default,
      },
      {
        name: "مونتسرات",
        image: imageAssets["/src/assets/images/flags/ms.svg"].default,
      },
      {
        name: "جورجیای جنوبی",
        image: imageAssets["/src/assets/images/flags/gs.svg"].default,
      },
      {
        name: "سنگال",
        image: imageAssets["/src/assets/images/flags/sn.svg"].default,
      },
      {
        name: "جزیره بووه",
        image: imageAssets["/src/assets/images/flags/bv.svg"].default,
      },
      {
        name: "جزایر سلیمان",
        image: imageAssets["/src/assets/images/flags/sb.svg"].default,
      },
      {
        name: "فرانسه",
        image: imageAssets["/src/assets/images/flags/fr.svg"].default,
      },
      {
        name: "سنت هلنا، صعود و تریستان دا کونا",
        image: imageAssets["/src/assets/images/flags/sh.svg"].default,
      },
      {
        name: "ماکائو",
        image: imageAssets["/src/assets/images/flags/mo.svg"].default,
      },
      {
        name: "آرژانتین",
        image: imageAssets["/src/assets/images/flags/ar.svg"].default,
      },
      {
        name: "بوسنی و هرزگوین",
        image: imageAssets["/src/assets/images/flags/ba.svg"].default,
      },
      {
        name: "آنگویلا",
        image: imageAssets["/src/assets/images/flags/ai.svg"].default,
      },
      {
        name: "گرنزی",
        image: imageAssets["/src/assets/images/flags/gg.svg"].default,
      },
      {
        name: "جیبوتی",
        image: imageAssets["/src/assets/images/flags/dj.svg"].default,
      },
      {
        name: "سنت کیتس و نویس",
        image: imageAssets["/src/assets/images/flags/kn.svg"].default,
      },
      {
        name: "سوریه",
        image: imageAssets["/src/assets/images/flags/sy.svg"].default,
      },
      {
        name: "پورتو ریکو",
        image: imageAssets["/src/assets/images/flags/pr.svg"].default,
      },
      {
        name: "پرو",
        image: imageAssets["/src/assets/images/flags/pe.svg"].default,
      },
      {
        name: "سان مارینو",
        image: imageAssets["/src/assets/images/flags/sm.svg"].default,
      },
      {
        name: "استرالیا",
        image: imageAssets["/src/assets/images/flags/au.svg"].default,
      },
      {
        name: "کالدونیای جدید",
        image: imageAssets["/src/assets/images/flags/nc.svg"].default,
      },
      {
        name: "جامائیکا",
        image: imageAssets["/src/assets/images/flags/jm.svg"].default,
      },
      {
        name: "قزاقستان",
        image: imageAssets["/src/assets/images/flags/kz.svg"].default,
      },
      {
        name: "سیرالئون",
        image: imageAssets["/src/assets/images/flags/sl.svg"].default,
      },
      {
        name: "پالائو",
        image: imageAssets["/src/assets/images/flags/pw.svg"].default,
      },
      {
        name: "کره جنوبی",
        image: imageAssets["/src/assets/images/flags/kr.svg"].default,
      },
      {
        name: "سن پیر و میکلن",
        image: imageAssets["/src/assets/images/flags/pm.svg"].default,
      },
      {
        name: "بلیز",
        image: imageAssets["/src/assets/images/flags/bz.svg"].default,
      },
      {
        name: "پاپوآ گینه نو",
        image: imageAssets["/src/assets/images/flags/pg.svg"].default,
      },
      {
        name: "ایسلند",
        image: imageAssets["/src/assets/images/flags/is.svg"].default,
      },
      {
        name: "ساموآی آمریکایی",
        image: imageAssets["/src/assets/images/flags/as.svg"].default,
      },
      {
        name: "بورکینافاسو",
        image: imageAssets["/src/assets/images/flags/bf.svg"].default,
      },
      {
        name: "پرتغال",
        image: imageAssets["/src/assets/images/flags/pt.svg"].default,
      },
      {
        name: "تایوان",
        image: imageAssets["/src/assets/images/flags/tw.svg"].default,
      },
      {
        name: "ژاپن",
        image: imageAssets["/src/assets/images/flags/jp.svg"].default,
      },
      {
        name: "چین",
        image: imageAssets["/src/assets/images/flags/cn.svg"].default,
      },
      {
        name: "لبنان",
        image: imageAssets["/src/assets/images/flags/lb.svg"].default,
      },
      {
        name: "سری‌لانکا",
        image: imageAssets["/src/assets/images/flags/lk.svg"].default,
      },
      {
        name: "گواتمالا",
        image: imageAssets["/src/assets/images/flags/gt.svg"].default,
      },
      {
        name: "صربستان",
        image: imageAssets["/src/assets/images/flags/rs.svg"].default,
      },
      {
        name: "ماداگاسکار",
        image: imageAssets["/src/assets/images/flags/mg.svg"].default,
      },
      {
        name: "اسواتینی",
        image: imageAssets["/src/assets/images/flags/sz.svg"].default,
      },
      {
        name: "رومانی",
        image: imageAssets["/src/assets/images/flags/ro.svg"].default,
      },
      {
        name: "آنتیگوا و باربودا",
        image: imageAssets["/src/assets/images/flags/ag.svg"].default,
      },
      {
        name: "کوراسائو",
        image: imageAssets["/src/assets/images/flags/cw.svg"].default,
      },
      {
        name: "زامبیا",
        image: imageAssets["/src/assets/images/flags/zm.svg"].default,
      },
      {
        name: "زیمبابوه",
        image: imageAssets["/src/assets/images/flags/zw.svg"].default,
      },
      {
        name: "تونس",
        image: imageAssets["/src/assets/images/flags/tn.svg"].default,
      },
      {
        name: "امارات متحده عربی",
        image: imageAssets["/src/assets/images/flags/ae.svg"].default,
      },
      {
        name: "مغولستان",
        image: imageAssets["/src/assets/images/flags/mn.svg"].default,
      },
      {
        name: "نروژ",
        image: imageAssets["/src/assets/images/flags/no.svg"].default,
      },
      {
        name: "گرینلند",
        image: imageAssets["/src/assets/images/flags/gl.svg"].default,
      },
      {
        name: "اوروگوئه",
        image: imageAssets["/src/assets/images/flags/uy.svg"].default,
      },
      {
        name: "باهاما",
        image: imageAssets["/src/assets/images/flags/bs.svg"].default,
      },
      {
        name: "روسیه",
        image: imageAssets["/src/assets/images/flags/ru.svg"].default,
      },
      {
        name: "جزایر ویرجین بریتانیا",
        image: imageAssets["/src/assets/images/flags/vg.svg"].default,
      },
      {
        name: "والیس و فوتونا",
        image: imageAssets["/src/assets/images/flags/wf.svg"].default,
      },
      {
        name: "چاد",
        image: imageAssets["/src/assets/images/flags/td.svg"].default,
      },
      {
        name: "سنت لوسیا",
        image: imageAssets["/src/assets/images/flags/lc.svg"].default,
      },
      {
        name: "یمن",
        image: imageAssets["/src/assets/images/flags/ye.svg"].default,
      },
      {
        name: "جزایر کوچک حاشیه‌ای ایالات متحده",
        image: imageAssets["/src/assets/images/flags/um.svg"].default,
      },
      {
        name: "سوئد",
        image: imageAssets["/src/assets/images/flags/se.svg"].default,
      },
      {
        name: "سوالبارد و یان ماین",
        image: imageAssets["/src/assets/images/flags/sj.svg"].default,
      },
      {
        name: "لائوس",
        image: imageAssets["/src/assets/images/flags/la.svg"].default,
      },
      {
        name: "لتونی",
        image: imageAssets["/src/assets/images/flags/lv.svg"].default,
      },
      {
        name: "کلمبیا",
        image: imageAssets["/src/assets/images/flags/co.svg"].default,
      },
      {
        name: "گرنادا",
        image: imageAssets["/src/assets/images/flags/gd.svg"].default,
      },
      {
        name: "سن بارتلمی",
        image: imageAssets["/src/assets/images/flags/bl.svg"].default,
      },
      {
        name: "کانادا",
        image: imageAssets["/src/assets/images/flags/ca.svg"].default,
      },
      {
        name: "جزایر هرد و مک‌دونالد",
        image: imageAssets["/src/assets/images/flags/hm.svg"].default,
      },
      {
        name: "هند",
        image: imageAssets["/src/assets/images/flags/in.svg"].default,
      },
      {
        name: "گینه بیسائو",
        image: imageAssets["/src/assets/images/flags/gw.svg"].default,
      },
      {
        name: "مقدونیه شمالی",
        image: imageAssets["/src/assets/images/flags/mk.svg"].default,
      },
      {
        name: "پاراگوئه",
        image: imageAssets["/src/assets/images/flags/py.svg"].default,
      },
      {
        name: "کرواسی",
        image: imageAssets["/src/assets/images/flags/hr.svg"].default,
      },
      {
        name: "کاستاریکا",
        image: imageAssets["/src/assets/images/flags/cr.svg"].default,
      },
      {
        name: "اوگاندا",
        image: imageAssets["/src/assets/images/flags/ug.svg"].default,
      },
      {
        name: "هلند کارائیبی",
        image: imageAssets["/src/assets/images/flags/bq.svg"].default,
      },
      {
        name: "بولیوی",
        image: imageAssets["/src/assets/images/flags/bo.svg"].default,
      },
      {
        name: "توگو",
        image: imageAssets["/src/assets/images/flags/tg.svg"].default,
      },
      {
        name: "مایوت",
        image: imageAssets["/src/assets/images/flags/yt.svg"].default,
      },
      {
        name: "جزایر مارشال",
        image: imageAssets["/src/assets/images/flags/mh.svg"].default,
      },
      {
        name: "کره شمالی",
        image: imageAssets["/src/assets/images/flags/kp.svg"].default,
      },
      {
        name: "هلند",
        image: imageAssets["/src/assets/images/flags/nl.svg"].default,
      },
      {
        name: "سرزمین‌های بریتانیایی در اقیانوس هند",
        image: imageAssets["/src/assets/images/flags/io.svg"].default,
      },
      {
        name: "مالت",
        image: imageAssets["/src/assets/images/flags/mt.svg"].default,
      },
      {
        name: "موریس",
        image: imageAssets["/src/assets/images/flags/mu.svg"].default,
      },
      {
        name: "جزیره نورفولک",
        image: imageAssets["/src/assets/images/flags/nf.svg"].default,
      },
      {
        name: "هندوراس",
        image: imageAssets["/src/assets/images/flags/hn.svg"].default,
      },
      {
        name: "اسپانیا",
        image: imageAssets["/src/assets/images/flags/es.svg"].default,
      },
      {
        name: "استونی",
        image: imageAssets["/src/assets/images/flags/ee.svg"].default,
      },
      {
        name: "قرقیزستان",
        image: imageAssets["/src/assets/images/flags/kg.svg"].default,
      },
      {
        name: "شیلی",
        image: imageAssets["/src/assets/images/flags/cl.svg"].default,
      },
      {
        name: "برمودا",
        image: imageAssets["/src/assets/images/flags/bm.svg"].default,
      },
      {
        name: "گینه استوایی",
        image: imageAssets["/src/assets/images/flags/gq.svg"].default,
      },
      {
        name: "لیبریا",
        image: imageAssets["/src/assets/images/flags/lr.svg"].default,
      },
      {
        name: "جزایر پیتکرن",
        image: imageAssets["/src/assets/images/flags/pn.svg"].default,
      },
      {
        name: "Libya",
        image: imageAssets["/src/assets/images/flags/ly.svg"].default,
      },
      {
        name: "لیختن اشتاین",
        image: imageAssets["/src/assets/images/flags/li.svg"].default,
      },
      {
        name: "واتیکان",
        image: imageAssets["/src/assets/images/flags/va.svg"].default,
      },
      {
        name: "جزیره کریسمس",
        image: imageAssets["/src/assets/images/flags/cx.svg"].default,
      },
      {
        name: "عمان",
        image: imageAssets["/src/assets/images/flags/om.svg"].default,
      },
      {
        name: "فیلیپین",
        image: imageAssets["/src/assets/images/flags/ph.svg"].default,
      },
      {
        name: "لهستان",
        image: imageAssets["/src/assets/images/flags/pl.svg"].default,
      },
      {
        name: "جزایر فارو",
        image: imageAssets["/src/assets/images/flags/fo.svg"].default,
      },
      {
        name: "بحرین",
        image: imageAssets["/src/assets/images/flags/bh.svg"].default,
      },
      {
        name: "بلاروس",
        image: imageAssets["/src/assets/images/flags/by.svg"].default,
      },
      {
        name: "اسلوونی",
        image: imageAssets["/src/assets/images/flags/si.svg"].default,
      },
      {
        name: "گوادلوپ",
        image: imageAssets["/src/assets/images/flags/gp.svg"].default,
      },
      {
        name: "قطر",
        image: imageAssets["/src/assets/images/flags/qa.svg"].default,
      },
      {
        name: "ویتنام",
        image: imageAssets["/src/assets/images/flags/vn.svg"].default,
      },
      {
        name: "موریتانی",
        image: imageAssets["/src/assets/images/flags/mr.svg"].default,
      },
      {
        name: "سنگاپور",
        image: imageAssets["/src/assets/images/flags/sg.svg"].default,
      },
      {
        name: "گرجستان",
        image: imageAssets["/src/assets/images/flags/ge.svg"].default,
      },
      {
        name: "بوروندی",
        image: imageAssets["/src/assets/images/flags/bi.svg"].default,
      },
      {
        name: "نائورو",
        image: imageAssets["/src/assets/images/flags/nr.svg"].default,
      },
      {
        name: "سودان جنوبی",
        image: imageAssets["/src/assets/images/flags/ss.svg"].default,
      },
      {
        name: "ساموآ",
        image: imageAssets["/src/assets/images/flags/ws.svg"].default,
      },
      {
        name: "جزایر کوکوس (کیلینگ)",
        image: imageAssets["/src/assets/images/flags/cc.svg"].default,
      },
      {
        name: "جمهوری کنگو",
        image: imageAssets["/src/assets/images/flags/cg.svg"].default,
      },
      {
        name: "قبرس",
        image: imageAssets["/src/assets/images/flags/cy.svg"].default,
      },
      {
        name: "کویت",
        image: imageAssets["/src/assets/images/flags/kw.svg"].default,
      },
      {
        name: "ترینیداد و توباگو",
        image: imageAssets["/src/assets/images/flags/tt.svg"].default,
      },
      {
        name: "تووالو",
        image: imageAssets["/src/assets/images/flags/tv.svg"].default,
      },
      {
        name: "آنگولا",
        image: imageAssets["/src/assets/images/flags/ao.svg"].default,
      },
      {
        name: "تونگا",
        image: imageAssets["/src/assets/images/flags/to.svg"].default,
      },
      {
        name: "یونان",
        image: imageAssets["/src/assets/images/flags/gr.svg"].default,
      },
      {
        name: "موزامبیک",
        image: imageAssets["/src/assets/images/flags/mz.svg"].default,
      },
      {
        name: "میانمار",
        image: imageAssets["/src/assets/images/flags/mm.svg"].default,
      },
      {
        name: "اتریش",
        image: imageAssets["/src/assets/images/flags/at.svg"].default,
      },
      {
        name: "اتیوپی",
        image: imageAssets["/src/assets/images/flags/et.svg"].default,
      },
      {
        name: "مارتینیک",
        image: imageAssets["/src/assets/images/flags/mq.svg"].default,
      },
      {
        name: "آذربایجان",
        image: imageAssets["/src/assets/images/flags/az.svg"].default,
      },
      {
        name: "ازبکستان",
        image: imageAssets["/src/assets/images/flags/uz.svg"].default,
      },
      {
        name: "بنگلادش",
        image: imageAssets["/src/assets/images/flags/bd.svg"].default,
      },
      {
        name: "ارمنستان",
        image: imageAssets["/src/assets/images/flags/am.svg"].default,
      },
      {
        name: "نیجریه",
        image: imageAssets["/src/assets/images/flags/ng.svg"].default,
      },
      {
        name: "آفریقای جنوبی",
        image: imageAssets["/src/assets/images/flags/za.svg"].default,
      },
      {
        name: "برونئی",
        image: imageAssets["/src/assets/images/flags/bn.svg"].default,
      },
      {
        name: "ایتالیا",
        image: imageAssets["/src/assets/images/flags/it.svg"].default,
      },
      {
        name: "فنلاند",
        image: imageAssets["/src/assets/images/flags/fi.svg"].default,
      },
      {
        name: "اسرائیل",
        image: imageAssets["/src/assets/images/flags/il.svg"].default,
      },
      {
        name: "آروبا",
        image: imageAssets["/src/assets/images/flags/aw.svg"].default,
      },
      {
        name: "نیکاراگوئه",
        image: imageAssets["/src/assets/images/flags/ni.svg"].default,
      },
      {
        name: "هائیتی",
        image: imageAssets["/src/assets/images/flags/ht.svg"].default,
      },
      {
        name: "کیریباتی",
        image: imageAssets["/src/assets/images/flags/ki.svg"].default,
      },
      {
        name: "جزایر تورکس و کایکوس",
        image: imageAssets["/src/assets/images/flags/tc.svg"].default,
      },
      {
        name: "جزایر کیمن",
        image: imageAssets["/src/assets/images/flags/ky.svg"].default,
      },
      {
        name: "اوکراین",
        image: imageAssets["/src/assets/images/flags/ua.svg"].default,
      },
      {
        name: "مکزیک",
        image: imageAssets["/src/assets/images/flags/mx.svg"].default,
      },
      {
        name: "فلسطین",
        image: imageAssets["/src/assets/images/flags/ps.svg"].default,
      },
      {
        name: "Fiji",
        image: imageAssets["/src/assets/images/flags/fj.svg"].default,
      },
      {
        name: "اسلواکی",
        image: imageAssets["/src/assets/images/flags/sk.svg"].default,
      },
      {
        name: "غنا",
        image: imageAssets["/src/assets/images/flags/gh.svg"].default,
      },
      {
        name: "سورینام",
        image: imageAssets["/src/assets/images/flags/sr.svg"].default,
      },
      {
        name: "کوبا",
        image: imageAssets["/src/assets/images/flags/cu.svg"].default,
      },
      {
        name: "بوتان",
        image: imageAssets["/src/assets/images/flags/bt.svg"].default,
      },
      {
        name: "مجارستان",
        image: imageAssets["/src/assets/images/flags/hu.svg"].default,
      },
      {
        name: "São تامé and Príncipe",
        image: imageAssets["/src/assets/images/flags/st.svg"].default,
      },
      {
        name: "عراق",
        image: imageAssets["/src/assets/images/flags/iq.svg"].default,
      },
      {
        name: "چک",
        image: imageAssets["/src/assets/images/flags/cz.svg"].default,
      },
      {
        name: "لیتوانی",
        image: imageAssets["/src/assets/images/flags/lt.svg"].default,
      },
      {
        name: "جزایر ماریانای شمالی",
        image: imageAssets["/src/assets/images/flags/mp.svg"].default,
      },
      {
        name: "بوتسوانا",
        image: imageAssets["/src/assets/images/flags/bw.svg"].default,
      },
      {
        name: "پاناما",
        image: imageAssets["/src/assets/images/flags/pa.svg"].default,
      },
      {
        name: "گابن",
        image: imageAssets["/src/assets/images/flags/ga.svg"].default,
      },
      {
        name: "اکوادور",
        image: imageAssets["/src/assets/images/flags/ec.svg"].default,
      },
    ];

    return _.shuffle(countries);
  },
};

export default fakers;
