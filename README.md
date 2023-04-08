# instalation

Use the stable version:
```shell
npm install github:wiraardy/Nishino-Project
```
Or via yarn
```shell
yarn add github:wiraardy/Nishino-Project
```

# List Scraper
* [Anime](#anime)
* [Downloader](#downloader)
* [Convert](#convert)
* [Information](#information)
* [Search](#search)
* [Stalk](#stalk)
* [Image](#image)
* [Hentai](#hentai)
* [PornHub](#pornhub)
* [News](#news)
* [Text Pro](#textpro)

* [New Feature](#newfeature)

Usage
```js
var Nishino = require('nishino-project')

```
### zerochan 

<details><summary><b>Zerochan</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.anime.zerochan('elaina')
.then(response => {
  console.log(response)
})
```
#### output
```json
[
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3538159.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.2115259.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.2425190.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096894.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3101347.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3383306.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3137157.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096893.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3137033.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3170296.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096896.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3174535.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3560448.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096883.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3166912.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096874.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3175209.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3195666.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3575331.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096457.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096869.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096888.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096895.jpg'
   ]
```
</details>

### rexdl(apk)

<details><summary><b>Rexdl</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.rexdl.rexdl('whatsapp')
.then(response => {
  console.log(response)
})
```
#### output
```json
[
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication',
    upload_date: ' October 8, 2022',
    deskripsi: 'GBWhatsApp MOD APK 13.65?(Full) (Plus) for Android GBWhatsApp �C WhatsApp Mod [Dual WhatsApp in One Phone] GBWhatsApp Mod is built on the latest version of the WhatsApp and allows you to run two WhatsApp...',
    thumb: 'https://rexdl.com/wp-content/uploads/2020/02/gbwhatsapp-plus-android-thumb-200x200.jpg',
    link: 'https://rexdl.com/android/gbwhatsapp-plus-apk-mod.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication / Social',
    upload_date: ' July 31, 2022',
    deskripsi: 'Download WhatsApp Plus (WhatsApp+)?JiMODs 9.35?Apk for Android Reborn Version +?Anti Ban WhatsApp Plus ?Anti Ban v3.0 WhatsApp JiMODs v9.30 WhatsApp+ v10.50 WhatsApp Jt JiMODs v9.30 [New] What if we tell you that our WhatsApp...',
    thumb: 'https://rexdl.com/wp-content/uploads/2015/10/WhatsApp-Plus-Android-thumb-320x320.png',
    link: 'https://rexdl.com/android/download-whatsapp-plus-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication',
    upload_date: ' June 30, 2022',
    deskripsi: 'YoWhatsApp Plus MOD APK 10.70?(Full) Android [Latest Version] YoWhatsApp is actually a WhatsApp mod which has some advanced and unique features which you can��t find in WhatsApp. There are some people who are searching...',
    thumb: 'https://rexdl.com/wp-content/uploads/2021/05/yowhatsapp-android-200x200.jpg',
    link: 'https://rexdl.com/android/yowhatsapp-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication / Messenger',
    upload_date: ' August 28, 2021',
    deskripsi: 'WhatsApp 2.21.18.5 GBWhatsApp + WhatsApp Plus Apk Android [Latest] X86 WhatsApp Messenger is a messaging app available for Android and other smartphones. WhatsApp uses your phone��s Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to...',
    thumb: 'https://rexdl.com/wp-content/uploads/2016/04/WhatsApp-Messenger-android-thumb.jpg',
    link: 'https://rexdl.com/android/whatsapp-messenger-apk-download.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Personalization',
    upload_date: ' May 23, 2021',
    deskripsi: 'GIF2Sticker �C Animated Sticker Maker for WhatsApp APK 0.5.1 Android GIF2Sticker �C Animated Sticker Maker for WhatsApp The best tool to create animated stickers for WhatsApp. With GIF2Sticker, you can convert your?videos?or?GIFs into animated...',
    thumb: 'https://rexdl.com/wp-content/uploads/2021/05/gif2sticker-android-200x200.jpg',
    link: 'https://rexdl.com/android/gif2sticker-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication',
    upload_date: ' May 4, 2021',
    deskripsi: 'WhatsApp Business 2.21.10.2 Apk for Android WhatsApp Business enables you to have a business presence on WhatsApp, communicate more efficiently with your customers, and help you grow your business. If you have separate business...',
    thumb: 'https://rexdl.com/wp-content/uploads/2018/02/whatsapp-business-android-thumb.jpg',
    link: 'https://rexdl.com/android/whatsapp-business-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Photography',
    upload_date: ' October 27, 2022',
    deskripsi: 'Adobe Photoshop Express Premium 8.6.1008?Apk + Mod Full Unlocked PHOTO FUN FOR EVERYONE Tap into your creativity on the go with Photoshop Express�Ca fun, fast, and easy picture editor for one-touch transformations and photo...',
    thumb: 'https://rexdl.com/wp-content/uploads/2016/12/adobe-photoshop-express-premium-android-thumb.jpg',
    link: 'https://rexdl.com/android/adobe-photoshop-express-premium-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Video Players & Editors',
    upload_date: ' October 26, 2022',
    deskripsi: 'FilmoraGo Video Editor & Maker Pro 7.2.0?Apk Unlocked for Android Removed DMCA A pretty powerful video editor application, which will not stamp a watermark or place a time limit on your clip. With FilmoraGo,...',
    thumb: 'https://rexdl.com/wp-content/uploads/2017/01/filmorago-free-video-editor-pro-android-thumb.jpg',
    link: 'https://rexdl.com/android/filmorago-free-video-editor-pro-unlocked-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Photography',
    upload_date: ' October 21, 2022',
    deskripsi: 'InShot Pro Mod Apk 1.869.1383?(Full Unlocked) Android InShot �C Best FREE HD?Video Editor?and?Video Maker?with all features,?trim & cut video/movie,?blur background, add?music,?transition effects,?text and emoji?and?filters! Powerful video editing features, record your precious moments of your...',
    thumb: 'https://rexdl.com/wp-content/uploads/2020/08/inshot-video-editor-video-maker-android-thumb-200x200.jpg',
    link: 'https://rexdl.com/android/inshot-video-editor-video-maker-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP',
    upload_date: ' October 17, 2022',
    deskripsi: 'PhotoRoom Studio Photo Editor?MOD APK 3.9.1-715?(PRO Unlocked) Android PhotoRoom is the all-in-one app that edits, designs and optimizes great visual content that helps you run your business from your phone. Remove or erase the...',
    thumb: 'https://rexdl.com/wp-content/uploads/2022/01/photoroom-android-200x200.jpg',
    link: 'https://rexdl.com/android/photoroom-apk.html/'
  }
]
````
</details>

### Anime

<details><summary><b>Anoboy Search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.anime.anoboy_search('one piece')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    download_sd: {
      m4u: 'https://www.mp4upload.com/q5q1acqejda5',
      zippy: 'https://www60.zippyshare.com/v/WfIWaAgk/file.html',
      mirror: 'https://www.mirrored.to/files/E1U1O24L/One_Piece_-_1032.360.mp4_links'
    },
    thumbnail: 'https://4.bp.blogspot.com/--vECG2T4EDs/XavTXQdeo8I/AAAAAAAABWg/m5JcbW9hosgX_yU8t2I3XEYQaheB5LxiQCLcBGAsYHQ/s240/04-onepiece.jpeg',
    title: 'One Piece Subtitle Indonesia',
    synopsis: 'Gol D. Roger dikenal sebagai “Raja Bajak Laut,�? terkuat dan paling terkenal yang telah berlayar di Grand Line. Penangkapan dan kematian Roger oleh Pemerintah Dunia membawa perubahan di seluruh dunia. Kata-kata terakhirnya sebelum kematiannya mengungkapkan keberadaan harta terbesar di dunia, yaitu One Piece. kata2 tersebut membawa dan menjadi Era bajak laut, siapapun pria yang bermimpi untuk menemukan One Piece-yang menjanjikan jumlah yang tidak terbatas dari kekayaan dan ketenaran-dan sangat mungkin puncak kemuliaan dan gelar Raja Bajak Laut.'
  }
}
```
</details>
<details><summary><b>Otakudesu Search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.anime.otakudesu_search('one piece')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      thumbnail: 'https://otakudesu.video/wp-content/uploads/2021/05/One-Piece-Sub-Indo.jpg'
    },
    {
      title: 'One Piece',
      japan: 'ONE PIECE',
      rate: '8.54',
      producer: 'Fuji TV, TAP, Shueisha',
      type: 'TV',
      status: 'Ongoing',
      episode: '?',
      duration: '24 Menit',
      release: 'Oct 20, 1999',
      studio: 'Toei Animation',
      genre: 'Action, Adventure, Comedy, Drama, Fantasy, Shounen, Super Power',
      desc: 'Dulu, ada seorang bajak laut terkenal di seluruh lautan bernama Gol D\n' +
        ' Roger. Ia merupakan seorang raja bajak laut yang telah berlayar mengarungi seluruh Grand Line, sayangnya ia ditangkap pemerintah dan telah dieksekusi mati. Sesaat sebelum kematiannya, Ia mengumumkan kepada dunia bahwa dirinya menyimpan sebuah harta karun bernama One Piece, sebuah harta karun yang kini menjadi incaran seluruh bajak laut yang ada di dunia.Di Era Bajak Laut saat ini, ada seorang remaja bernama Monkey D. Luffy yang memiliki cita-cita untuk menjadi seorang Raja Bajak Laut. Namun Luffy sadar bahwa ia tidak bisa melakukannya sendiri, sembari dalam perjalanan ia juga mencari kru dan bertemu dengan teman-temannya yang baru. Berbeda dengan bajak laut lain yang ganas dan jahat, Luffy bersama teman-temannya berlayar murni atas dasar petualangan serta mencari tempat tempat baru yang akan muncul di hadapan mereka.Di perjalanan inilah cerita mereka dimulai, mampukan Luffy bersama teman-temannya mencapai impian mereka?(Info: Episode sebelumnya akan ditambahkan secara berkala)',
      batch: 'https://otakudesu.video/lengkap/wpoiec-sub-indo-p35/'
    }
  ]
}
```
</details>
<details><summary><b>My Anime List Top Airing</b></summary><br>

```js
Nishino.anime.mal_top_airing()
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      rank: '1',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1566/122794.jpg?s=1dd290c4b0bc3df1083c456064109e2f',
      title: 'Kingdom 4th Season',
      score: '8.81',
      link: 'https://myanimelist.net/anime/50160/Kingdom_4th_Season'
    },
    {
      rank: '2',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1864/122519.jpg?s=17612a9ecb307994db4ced0a85774a37',
      title: 'Made in Abyss: Retsujitsu no Ougonkyou',
      score: '8.80',
      link: 'https://myanimelist.net/anime/41084/Made_in_Abyss__Retsujitsu_no_Ougonkyou'
    },
    {
      rank: '3',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      title: 'One Piece',
      score: '8.66',
      link: 'https://myanimelist.net/anime/21/One_Piece'
    },
    {
      rank: '4',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1120/120796.jpg?s=a52ff27a36d2c027953221d2627c898e',
      title: 'Summertime Render',
      score: '8.49',
      link: 'https://myanimelist.net/anime/47194/Summertime_Render'
    },
    {
      rank: '5',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1530/120110.jpg?s=9b3fb5bfd6e183b3482cd6e245e9270a',
      title: 'Overlord IV',
      score: '8.33',
      link: 'https://myanimelist.net/anime/48895/Overlord_IV'
    },
    {
      rank: '6',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1259/110227.jpg?s=08c77f58ab974a8fc36af5e2eac9040a',
      title: 'Holo no Graffiti',
      score: '8.32',
      link: 'https://myanimelist.net/anime/44042/Holo_no_Graffiti'
    },
    {
      rank: '7',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1392/124401.jpg?s=e85f33c9c344cfcfb5e3618fbe849240',
      title: 'Lycoris Recoil',
      score: '8.28',
      link: 'https://myanimelist.net/anime/50709/Lycoris_Recoil'
    }
  ]
}
```
</details>
<details><summary><b>My Anime List Top Anime</b></summary><br>

```js
Nishino.anime.mal_top_anime()
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      rank: '1',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f',
      title: 'Fullmetal Alchemist: Brotherhood',
      score: '9.13',
      link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood'
    },
    {
      rank: '2',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1160/122627.jpg?s=9b41450e9598d10c97fb4eeb7cca3737',
      title: 'Kaguya-sama wa Kokurasetai: Ultra Romantic',
      score: '9.12',
      link: 'https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic'
    },
    {
      rank: '3',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209',
      title: 'Gintama°',
      score: '9.08',
      link: 'https://myanimelist.net/anime/28977/Gintama°'
    },
    {
      rank: '4',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/5/73199.jpg?s=97b97d568f25a02cf5a22dda13b5371f',
      title: 'Steins;Gate',
      score: '9.08',
      link: 'https://myanimelist.net/anime/9253/Steins_Gate'
    },
    {
      rank: '5',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1517/100633.jpg?s=4540a01b5883647ade494cd28392f100',
      title: 'Shingeki no Kyojin Season 3 Part 2',
      score: '9.07',
      link: 'https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2'
    },
    {
      rank: '6',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/4/50361.jpg?s=b3a061db8c3d42a055d58f9df1f3dac7',
      title: "Gintama'",
      score: '9.05',
      link: 'https://myanimelist.net/anime/9969/Gintama'
    },
    {
      rank: '7',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1988/113791.jpg?s=e12ba155fe4a7beff571a5010d8214b2',
      title: 'Gintama: The Final',
      score: '9.05',
      link: 'https://myanimelist.net/anime/39486/Gintama__The_Final'
    }
  ]
}
```
</details>
<details><summary><b>My Anime List Search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.anime.mal_search_anime('one piece')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      title: 'One Piece Film: Gold',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/12/81081.jpg?s=4372756d851a7e1807a572817ac16574',
      url: 'https://myanimelist.net/anime/31490/One_Piece_Film__Gold',
      type: 'Movie',
      episode: '1',
      score: '7.09'
    },
    {
      title: 'One Piece Film: Z',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/6/44297.jpg?s=ab00c4fc2882d3bb72c1985ada0af886',
      url: 'https://myanimelist.net/anime/12859/One_Piece_Film__Z',
      type: 'Movie',
      episode: '1',
      score: '7.91'
    },
    {
      title: 'One Piece',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      url: 'https://myanimelist.net/anime/21/One_Piece',
      type: 'Movie',
      episode: '1',
      score: '8.15'
    },
    {
      title: 'One Piece Movie 14: Stampede',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1221/100550.jpg?s=0a8df0aea5d9091e628bab80b0dfae26',
      url: 'https://myanimelist.net/anime/38234/One_Piece_Movie_14__Stampede',
      type: 'TV',
      episode: '-',
      score: '8.66'
    },
    {
      title: 'One Piece 3D: Mugiwara Chase',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/4/32455.jpg?s=991795b9931d468dd5e49ab8249ba9a8',
      url: 'https://myanimelist.net/anime/9999/One_Piece_3D__Mugiwara_Chase',
      type: 'Movie',
      episode: '1',
      score: '8.24'
    },
    {
      title: 'One Piece Film: Strong World',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1192/116784.jpg?s=ab8dc5d03ecadd39b7b9ddff4cfbfb82',
      url: 'https://myanimelist.net/anime/4155/One_Piece_Film__Strong_World',
      type: 'Movie',
      episode: '1',
      score: '6.97'
    },
    {
      title: 'One Piece Movie 04: Dead End no Bouken',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1100/116767.jpg?s=a5923a15c9ba56da9bb272f8440543c1',
      url: 'https://myanimelist.net/anime/462/One_Piece_Movie_04__Dead_End_no_Bouken',
      type: 'Movie',
      episode: '1',
      score: '8.10'
    },
    {
      title: 'One Piece: Adventure of Nebulandia',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/5/77050.jpg?s=8018a90371f9663e8a39ffc283fb5adc',
      url: 'https://myanimelist.net/anime/32051/One_Piece__Adventure_of_Nebulandia',
      type: 'Movie',
      episode: '1',
      score: '7.54'
    },
    {
      title: 'One Piece Movie 09: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/12/25414.jpg?s=b6f41293d9baad9499b085e1abaca011',
      url: 'https://myanimelist.net/anime/3848/One_Piece_Movie_09__Episode_of_Chopper_Plus_-_Fuyu_ni_Saku_Kiseki_no_Sakura',
      type: 'Special',
      episode: '1',
      score: '7.26'
    }
  ]
}
```
</details>
<details><summary><b>My Anime List Search Manga</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.anime.mal_search_manga('one piece')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      title: 'One Piece',
      type: 'Manga',
      vol: '-',
      score: '9.20',
      link: 'https://myanimelist.net/manga/13/One_Piece',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/253146.jpg?s=e5286481ed2b4c11ab39d1420110dc43'
    },
    {
      title: 'One Piece Party',
      type: 'Manga',
      vol: '7',
      score: '7.26',
      link: 'https://myanimelist.net/manga/86972/One_Piece_Party',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/165199.jpg?s=3681113d712618dfe56c120656894a46'
    },
    {
      title: 'One Piece: Strong World',
      type: 'One-shot',
      vol: '-',
      score: '8.11',
      link: 'https://myanimelist.net/manga/17152/One_Piece__Strong_World',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/1/25743.jpg?s=6d9e0a31fd6e1d0f4c136ea0ff0294fa'
    },
    {
      title: 'One Piece: Episode A',
      type: 'Manga',
      vol: '2',
      score: '8.16',
      link: 'https://myanimelist.net/manga/128594/One_Piece__Episode_A',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/266074.jpg?s=c24cf1aacdc51dcad5af27fcf2637050'
    },
    {
      title: 'One Piece: Vivi no Bouken',
      type: 'One-shot',
      vol: '-',
      score: '7.39',
      link: 'https://myanimelist.net/manga/139972/One_Piece__Vivi_no_Bouken',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/249763.jpg?s=204680ec1e989fc8bfd44afdbb9c1350'
    },
    {
      title: 'One Piece Novel: A',
      type: 'Light Novel',
      vol: '2',
      score: '7.93',
      link: 'https://myanimelist.net/manga/127114/One_Piece_Novel__A',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/232216.jpg?s=77c7ab1089d3adb310bf8a3d694d829b'
    },
    {
      title: 'One Piece: Loguetown-hen',
      type: 'Light Novel',
      vol: '1',
      score: '7.03',
      link: 'https://myanimelist.net/manga/94534/One_Piece__Loguetown-hen',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/1/167765.jpg?s=08ead37a0df1f906cdfe94106aa6478c'
    },
    {
      title: 'One Piece: Roronoa Zoro, Umi ni Chiru',
      type: 'One-shot',
      vol: '-',
      score: '7.63',
      link: 'https://myanimelist.net/manga/120865/One_Piece__Roronoa_Zoro_Umi_ni_Chiru',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/3/265729.jpg?s=c3b7a9ecd32291f9d775d17c3c55f82a'
    },
    {
      title: 'Gekijouban One Piece: Stampede',
      type: 'Light Novel',
      vol: '1',
      score: '8.01',
      link: 'https://myanimelist.net/manga/120656/Gekijouban_One_Piece__Stampede',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/1/230439.jpg?s=964b077dd0feb25b8b8407caf8ec08e3'
    }
  ],
}
```
</details>
<details><summary><b>My Anime List Search Character</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.anime.mal_search_character('luffy')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      name: 'Monkey D., Luffy',
      alias_name: '(Mugiwara, Straw Hat, Lucy, Luffytaro)',
      url: 'https://myanimelist.net/character/40/Luffy_Monkey_D',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/9/310307.jpg?s=3a27ab33bee665febfba970f24f203ba',
      anime: 'Nissan Serena x One Piece 3D: Mugiwara Chase - Sennyuu!! Sauzando Sanii-gou',
      manga: 'One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari'
    },
    {
      name: 'Yamamoto, Luffy',
      alias_name: '',
      url: 'https://myanimelist.net/character/207833/Luffy_Yamamoto',
      thumbnail: 'https://cdn.myanimelist.net/images/questionmark_23.gif',
      anime: '',
      manga: ''
    },
    {
      name: 'Shishido, Jouichirou',
      alias_name: '(Fluffy)',
      url: 'https://myanimelist.net/character/208064/Jouichirou_Shishido',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/13/469123.jpg?s=ae43b5040d133c9d7b5d01cbd3f59cec',
      anime: '',
      manga: ''
    },
    {
      name: 'Piwi',
      alias_name: '(The Green Bird of Happiness, Fluffy)',
      url: 'https://myanimelist.net/character/155084/Piwi',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/3/441386.jpg?s=d69f5a01aa1cca37680ada6848f64240',
      anime: 'Helck',
      manga: ''
    },
    {
      name: 'Wada, Akinori',
      alias_name: '(Sweet Pretty Lonely Heart Fluffybro)',
      url: 'https://myanimelist.net/character/152561/Akinori_Wada',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/11/333941.jpg?s=ef6ccd0fbeac8670adecf9c50a16614a',
      anime: '',
      manga: ''
    },
    {
      name: 'Koyama, Nami',
      alias_name: '',
      url: 'https://myanimelist.net/character/207834/Nami_Koyama',
      thumbnail: 'https://cdn.myanimelist.net/images/questionmark_23.gif',
      anime: '',
      manga: ''
    },
    {
      name: 'Helmeppo',
      alias_name: '',
      url: 'https://myanimelist.net/character/12362/Helmeppo',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/14/48661.jpg?s=ea8c21d6e7b875553a5b547f7d231a5d',
      anime: 'One Piece: Yume no Soccer Ou!',
      manga: 'One Piece Film: Z'
    },
    {
      name: 'Gina',
      alias_name: '',
      url: 'https://myanimelist.net/character/22414/Gina',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/6/53322.jpg?s=21e974e1d4a04aaac7a92ae4984e8376',
      anime: 'One Piece',
      manga: ''
    },
    {
      name: 'Makino',
      alias_name: '',
      url: 'https://myanimelist.net/character/21210/Makino',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/6/49465.jpg?s=359c7644512a10d7cefef3f03bda327f',
      anime: 'One Piece',
      manga: 'One Piece: Episode of Luffy - Hand Island no Bouken'
    },
    {
      name: 'Daigin',
      alias_name: '',
      url: 'https://myanimelist.net/character/161873/Daigin',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/13/369186.jpg?s=ac234c957c96c9aa52c6464acca318c0',
      anime: 'One Piece',
      manga: ''
    }
  ]
}
```
</details>

### Downloader

<details><summary><b>TikTok</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
Nishino.download.tiktok('https://vt.tiktok.com/ZSR2vqUFY/?k=1')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  title: 'yg nonton moga cpt punya hedon😀#vario #teamvario #vario125 #variomodifikasi',
  thumbnail: 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/4af6989af1c44fa39971b775adeb3fc7_1659318526?x-expires=1663077600&x-signature=T79X4yfbWp%2FytYpw%2BuCAgb5DPjQ%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=202209130816120101901760190404BCB2',
  duration: null,
  result: [
    {
      url: 'https://v16m-default.akamaized.net/9c6febad707af8b9fc63b00a68177c9c/632090bb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/b7a3dec31bea40ba903e6a9f0d2a9f85/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1646&bt=823&cs=0&ds=3&ft=ArCXsBnZqi2mo0PeqzGBkVQnNk6bHKJ&mime_type=video_mp4&qs=0&rc=ZmVoNWloZ2VmOjQ0ZWY0aEBpM3A1dTY6ZnJtZTMzZjgzM0A0LWNfYjZhXl8xYmM1XmIyYSNlbi1mcjRvLWdgLS1kL2Nzcw%3D%3D&l=202209130816120101901760190404BCB2&btag=80000',
      quality: 'watermark',
      extension: 'mp4',
      size: 177,
      formattedSize: '177 B',
      videoAvailable: true,
      audioAvailable: true,
      chunked: false,
      cached: false
    },
    {
      url: 'https://v16m-default.akamaized.net/d70e4379f504b2762651c45b60721907/632090bb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/dc6cdc20329a4c7ea9c237c3e3fe93ff/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1672&bt=836&cs=0&ds=6&ft=ArCXsBnZqi2mo0PeqzGBkVQnNk6bHKJ&mime_type=video_mp4&qs=0&rc=ZTpkaTU0ZjlpNWQ0NmY3Z0BpM3A1dTY6ZnJtZTMzZjgzM0BgYTIzLmExX2MxYDYyYzQtYSNlbi1mcjRvLWdgLS1kL2Nzcw%3D%3D&l=202209130816120101901760190404BCB2&btag=80000',
      quality: 'hd',
      extension: 'mp4',
      size: 1638710,
      formattedSize: '1.56 MB',
      videoAvailable: true,
      audioAvailable: true,
      chunked: false,
      cached: false
    },
    {
      url: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7119956979585485595.mp3',
      quality: '128kbps',
      extension: 'mp3',
      size: 370356,
      formattedSize: '361.68 KB',
      videoAvailable: false,
      audioAvailable: true,
      chunked: false,
      cached: false
    }
  ],
}
```
</details>
<details><summary><b>YouTube DL Audio/Mp3</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
Nishino.download.youtube_dl_mp3('https://youtu.be/xCoSWXD8s_U')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    title: 'Pargoy Joko Kentir - Terate Garaga Jandhut Feat BG audio __Live Munggur Sabtu 3 Sept 2022',
    description: 'Terimakasih sudah mampir ke chanel kami aditjaya pictures\n' +
      'dukung chanel kami dengan subcribe like koment agar admin semangat upload\n' +
      'sehat selalu buat kalian semua.\n' +
      '\n' +
      'Garaga jandut Sragen Pimp . Bams 0813-9249-2929\n' +
      'Selorejo, kedawung, Sragen \n' +
      'Jambangan, Celep, Kedawung, Sragen\n' +
      '\n' +
      'Audio Sound \n' +
      'BG Audio Abah Windhi 0856-4226-2595\n' +
      'Mojo, Sragen\n' +
      '\n' +
      ' "AditjayA pictures" photography& videography\n' +
      'mastering video dan audio 0853 2717 2730\n' +
      '\n' +
      '#garaga_music \n' +
      '#garaga_jandhut \n' +
      '#garagasragen\n' +
      '#bendronggeni \n' +
      '#reogbendronggeni \n' +
      '#bgaudio  \n' +
      '#tataganosa \n' +
      '#veronikadantik \n' +
      '#chefiramdhani \n' +
      '#victoriaangel\n' +
      '#victoria \n' +
      '#aditjaya_pictures \n' +
      '#reog_ganas',
    length_econds: '372',
    owner_rofile_url: 'http://www.youtube.com/channel/UCzFHpkN9Y_yqEiWCXGowmrA',
    external_channel_id: 'UCzFHpkN9Y_yqEiWCXGowmrA',
    thumb: 'https://i.ytimg.com/vi/xCoSWXD8s_U/maxresdefault.jpg',
    channel: 'aditjaya pictures',
    published: '2022-09-09',
    views: '30152',
    category: 'Entertainment',
    url: 'https://rr1---sn-poqvn5u-n0cz.googlevideo.com/videoplayback?expire=1663078814&ei=Pj0gY-_lIdyK4-EP7Pmo0AM&ip=114.4.223.3&id=o-APjiCPtlOqJ2Puqt74IqleXq-dcGF3gVd_wVpjuOzOj-&itag=250&source=youtube&requiressl=yes&mh=wc&mm=31%2C29&mn=sn-poqvn5u-n0cz%2Csn-poqvn5u-jb36&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=272500&vprv=1&mime=audio%2Fwebm&ns=NQwfYoHO-PiHqFh5fx0SppkH&gir=yes&clen=3008992&dur=371.821&lmt=1662886555913040&mt=1663056783&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&txp=5432434&n=7Jx3VQIz9Qi_jQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgWUzWL_HOh9hIV2Y25r8VyI-7p55tgPlgxC5JrsAjLAwCIQDNgeah0A5SHTayFNJDTDK8BQxrmA6FHen4EXw0gmd_PA%3D%3D&sig=AOq0QJ8wRgIhAKgDbiv6z2VeQWWzqRX4nRcACcSm0Z_i0Gw13Z1ovXbeAiEA1exKqLHYPtUVQ7h8u3-11NUC5vd7L2E8YjSL9QiSwTI%3D'
  },
}
```
</details>
<details><summary><b>YouTube DL Video/Mp4</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
Nishino.download.youtube_dl_mp4('https://youtu.be/xCoSWXD8s_U')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    title: 'Pargoy Joko Kentir - Terate Garaga Jandhut Feat BG audio __Live Munggur Sabtu 3 Sept 2022',
    description: 'Terimakasih sudah mampir ke chanel kami aditjaya pictures\n' +
      'dukung chanel kami dengan subcribe like koment agar admin semangat upload\n' +
      'sehat selalu buat kalian semua.\n' +
      '\n' +
      'Garaga jandut Sragen Pimp . Bams 0813-9249-2929\n' +
      'Selorejo, kedawung, Sragen \n' +
      'Jambangan, Celep, Kedawung, Sragen\n' +
      '\n' +
      'Audio Sound \n' +
      'BG Audio Abah Windhi 0856-4226-2595\n' +
      'Mojo, Sragen\n' +
      '\n' +
      ' "AditjayA pictures" photography& videography\n' +
      'mastering video dan audio 0853 2717 2730\n' +
      '\n' +
      '#garaga_music \n' +
      '#garaga_jandhut \n' +
      '#garagasragen\n' +
      '#bendronggeni \n' +
      '#reogbendronggeni \n' +
      '#bgaudio  \n' +
      '#tataganosa \n' +
      '#veronikadantik \n' +
      '#chefiramdhani \n' +
      '#victoriaangel\n' +
      '#victoria \n' +
      '#aditjaya_pictures \n' +
      '#reog_ganas',
    length_seconds: '372',
    owner_rofile_url: 'http://www.youtube.com/channel/UCzFHpkN9Y_yqEiWCXGowmrA',
    external_channel_id: 'UCzFHpkN9Y_yqEiWCXGowmrA',
    thumb: 'https://i.ytimg.com/vi/xCoSWXD8s_U/maxresdefault.jpg',
    channel: 'aditjaya pictures',
    published: '2022-09-09',
    views: '30195',
    category: 'Entertainment',
    url: 'https://rr1---sn-poqvn5u-n0cz.googlevideo.com/videoplayback?expire=1663079066&ei=Oj4gY53BDrSHz7sPn7qsuA4&ip=114.4.223.3&id=o-ACL0MX-ymSIzfL_KgSXkZKCZg0cBfrQqjA6XxVkl5SQ9&itag=18&source=youtube&requiressl=yes&mh=wc&mm=31%2C29&mn=sn-poqvn5u-n0cz%2Csn-poqvn5u-jb36&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=272500&vprv=1&mime=video%2Fmp4&ns=bAXUm_zkk7WRUWcT_yS9dAEH&gir=yes&clen=36351912&ratebypass=yes&dur=371.867&lmt=1662888534086014&mt=1663057023&fvip=3&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&txp=5438434&n=HKDcJ7vgJyMtzA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAP1N4P5HSgvlKvyKxMef8f-RXHcfoSZycLtihJbhweGnAiEAjm7abM0V-UsgBz861_tSU5nxgLO82qQH36eRUA_fZgI%3D&sig=AOq0QJ8wRQIgTDcjDb4kkEt_609pHEpBK2L169sxU4dxrkEHboAD9VkCIQDcBAtbSns2hlXqW2YGr5e3NdzColXuWZLxkiobSrT6jw%3D%3D'
  },
}
```
</details>
<details><summary><b>YouTube Play Audio/Mp3</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.download.youtube_play_mp3('fungi look alive')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    title: 'Fungi - Look Alive',
    description: '🔥 Blocboy Jr x Drake - Alive (Fungi Remix)🔥\n' +
      '↪︎ https://soundcloud.com/beatsbyfungi/look-alive\n' +
      "Bass Nation's Spotify playlist: http://spoti.fi/2kzinP8\n" +
      '\n' +
      '🔊 Bass Nation 🔊\n' +
      '●http://nations.io\n' +
      '●http://twitter.com/all808nation\n' +
      '●http://instagram.com/bassnation\n' +
      '●http://facebook.com/allbassnation\n' +
      '●http://soundcloud.com/allbassnation\n' +
      '●https://snapchat.com/add/allbassnation\n' +
      '\n' +
      '🎵 fungi 🎵\n' +
      '●https://soundcloud.com/beatsbyfungi\n' +
      '●https://traktrain.com/beatsbyfungi#168114\n' +
      '●https://www.instagram.com/beatsbyfungi/\n' +
      '●https://beatsbyfungi.bandcamp.com/\n' +
      '\n' +
      '⚠️ These videos may cause people with photosensitive epilepsy to convulse in seizures. Viewer discretion is advised. ⚠️\n' +
      '\n' +
      'Moving Backgrounds: https://www.instagram.com/officialgoestee/\n' +
      '\n' +
      '#fungi\n' +
      '#lookalive\n' +
      '#bassnation',
    length_seconds: '188',
    owner_rofile_url: 'http://www.youtube.com/channel/UCCvVpbYRgYjMN7mG7qQN0Pg',
    external_channel_id: 'UCCvVpbYRgYjMN7mG7qQN0Pg',
    youtube_url: 'https://youtube.com/watch?v=E7uWBOT7BYY',
    thumb: 'https://i.ytimg.com/vi/E7uWBOT7BYY/maxresdefault.jpg',
    channel: 'Bass Nation',
    published: '2019-05-16',
    views: '354059',
    category: 'Music',
    url: 'https://rr2---sn-poqvn5u-n0cz.googlevideo.com/videoplayback?expire=1663079220&ei=1D4gY7rjD9GE8QP5waDICQ&ip=114.4.223.3&id=o-AFQG4pJRqEDx5xx4i2_OWzlpNuz4N47VxucXIduXHJ2h&itag=18&source=youtube&requiressl=yes&mh=nS&mm=31%2C29&mn=sn-poqvn5u-n0cz%2Csn-poqvn5u-jb3y&ms=au%2Crdu&mv=m&mvi=2&pl=22&initcwndbps=281250&vprv=1&mime=video%2Fmp4&ns=K4CDA5TDJEvLUqlZ7COI7zsH&gir=yes&clen=15368963&ratebypass=yes&dur=187.663&lmt=1558045885390001&mt=1663057259&fvip=2&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&d_tmro=no&txp=5531432&n=OeBULA8jWopB9Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgJbj21X4l1IK98PNPT6f9QSvnOOwpsO4Ifs7CqC-qzdMCIFksprsFop_m71YLSXuowsu1J6Ko3VOWWVwxQpoNC8Ja&sig=AOq0QJ8wRAIgZwJRgTcuuCPwX1CFxsnpuoOj9XHkcPRIj7cFxQpHwnkCIDhwkSDI6eyoIXmKiVGv0YjKzech4bA-GOyirWiqvLOL'
  },
}
```
</details>
<details><summary><b>YouTube Play Video/Mp4</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
Nishino.download.youtube_play_mp4('fungi look alive')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    title: 'Fungi - Look Alive',
    description: '🔥 Blocboy Jr x Drake - Alive (Fungi Remix)🔥\n' +
      '↪︎ https://soundcloud.com/beatsbyfungi/look-alive\n' +
      "Bass Nation's Spotify playlist: http://spoti.fi/2kzinP8\n" +
      '\n' +
      '🔊 Bass Nation 🔊\n' +
      '●http://nations.io\n' +
      '●http://twitter.com/all808nation\n' +
      '●http://instagram.com/bassnation\n' +
      '●http://facebook.com/allbassnation\n' +
      '●http://soundcloud.com/allbassnation\n' +
      '●https://snapchat.com/add/allbassnation\n' +
      '\n' +
      '🎵 fungi 🎵\n' +
      '●https://soundcloud.com/beatsbyfungi\n' +
      '●https://traktrain.com/beatsbyfungi#168114\n' +
      '●https://www.instagram.com/beatsbyfungi/\n' +
      '●https://beatsbyfungi.bandcamp.com/\n' +
      '\n' +
      '⚠️ These videos may cause people with photosensitive epilepsy to convulse in seizures. Viewer discretion is advised. ⚠️\n' +
      '\n' +
      'Moving Backgrounds: https://www.instagram.com/officialgoestee/\n' +
      '\n' +
      '#fungi\n' +
      '#lookalive\n' +
      '#bassnation',
    length_seconds: '188',
    owner_rofile_url: 'http://www.youtube.com/channel/UCCvVpbYRgYjMN7mG7qQN0Pg',
    external_channel_id: 'UCCvVpbYRgYjMN7mG7qQN0Pg',
    youtube_url: 'https://youtube.com/watch?v=E7uWBOT7BYY',
    thumb: 'https://i.ytimg.com/vi/E7uWBOT7BYY/maxresdefault.jpg',
    channel: 'Bass Nation',
    published: '2019-05-16',
    views: '354059',
    category: 'Music',
    url: 'https://rr2---sn-poqvn5u-n0cz.googlevideo.com/videoplayback?expire=1663079220&ei=1D4gY7rjD9GE8QP5waDICQ&ip=114.4.223.3&id=o-AFQG4pJRqEDx5xx4i2_OWzlpNuz4N47VxucXIduXHJ2h&itag=18&source=youtube&requiressl=yes&mh=nS&mm=31%2C29&mn=sn-poqvn5u-n0cz%2Csn-poqvn5u-jb3y&ms=au%2Crdu&mv=m&mvi=2&pl=22&initcwndbps=281250&vprv=1&mime=video%2Fmp4&ns=K4CDA5TDJEvLUqlZ7COI7zsH&gir=yes&clen=15368963&ratebypass=yes&dur=187.663&lmt=1558045885390001&mt=1663057259&fvip=2&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&d_tmro=no&txp=5531432&n=OeBULA8jWopB9Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgJbj21X4l1IK98PNPT6f9QSvnOOwpsO4Ifs7CqC-qzdMCIFksprsFop_m71YLSXuowsu1J6Ko3VOWWVwxQpoNC8Ja&sig=AOq0QJ8wRAIgZwJRgTcuuCPwX1CFxsnpuoOj9XHkcPRIj7cFxQpHwnkCIDhwkSDI6eyoIXmKiVGv0YjKzech4bA-GOyirWiqvLOL'
  },
}
```
</details>

### Convert

<details><summary><b>Emoji To Image/Png</b></summary><br>

> Required parameters
> - (emoji) *type **String***

```js
Nishino.convert.emoji_to_png('🔥')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    apple: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/fire_1f525.png',
    google: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/fire_1f525.png',
    samsung: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/320/fire_1f525.png',
    microsoft: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/310/fire_1f525.png',
    whatsapp: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/whatsapp/326/fire_1f525.png',
    twitter: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/fire_1f525.png',
    facebook: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/327/fire_1f525.png',
    jooxPixel: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/fire_1f525.png',
    openemoji: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/fire_1f525.png',
    emojidex: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/340/fire_1f525.png',
    messanger: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/toss-face/342/fire_1f525.png',
    LG: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/338/fire_1f525.png',
    HTC: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/noto-emoji/341/fire_1f525.jpg',
    mozilla: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/sony/336/fire_1f525.png',
    softbank: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojidex/112/fire_1f525.png',
    docomo: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/fire_1f525.png',
    KDDI: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/lg/307/fire_1f525.png'
  },
}
```
</details>
<details><summary><b>Google Text To Speech</b></summary><br>

> Required parameters
> - (text) *type **String***
> - (language) *type **String***

```js
var text = 'hello world' //the text you want to convert into sound
var language = 'id' //language code, you can check at https://github.com/wiraardy/scraper/blob/master/lib/defaults/country-code/country-codes.txt

Nishino.convert.gtts(text, language)
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    audio: 'https://translate.google.com/translate_tts?ie=UTF-8&q=hellp%20world&tl=id&total=1&idx=0&textlen=11&client=tw-ob&prev=input&ttsspeed=1'
  },
}
```
</details>

### Information

<details><summary><b>Earthquake Info</b></summary><br>

```js
Nishino.info.gempa_terkini()
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    waktu: '13/09/202208:09:18 WIB',
    lintang: '1.7',
    bujur: '139.06',
    magnitudo: '4.5',
    kedalaman: '10 Km',
    wilayah: 'Pusat gempa berada di laut 38km timur laut Sarmi',
    google_maps: 'https://maps.google.com/maps?ll=1.7,139.06,&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3'
  },
}
```
</details>

### Search

<details><summary><b>Github Repository</b></summary><br>

> Required Parameters 
> - (query) *type **String***

```js
Nishino.search.github_repo('rem_comp')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  count: 1,
  result: [
    {
      id: private,
      node_d: 'private',
      name_repo: 'scraper',
      full_name_repo: 'wiraardy/scraper',
      url_repo: 'https://github.com/wiraardy/scraper',
      description: null,
      git_url: 'git://github.com/wiraardy/Nishino.git',
      ssh_url: 'git@github.com:wiraardy/Nishino.git',
      clone_url: 'https://github.com/wiraardy/Nishino.git',
      svn_url: 'https://github.com/wiraardy/scraper',
      homepage: null,
      stargazers: 6,
      watchers: 6,
      forks: 0,
      default_branch: 'master',
      language: 'JavaScript',
      is_private: false,
      is_fork: false,
      created_at: '2021-10-15T01:21:13Z',
      updated_at: '2022-09-04T13:39:38Z',
      pushed_at: '2022-09-13T03:39:41Z'
    }
  ],
}
```
</details>
<details><summary><b>Film</b></summary><br>

> Required Parameters 
> - (query) *type **String***

```js
Nishino.search.film('the conjuring')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      title: 'The Conjuring: The Devil Made Me Do It (2021) Subtitle Indonesia',
      quality: 'HMAX WEB-DL2021',
      type: 'Movie',
      upload: '2021',
      link: 'http://167.99.31.48/the-conjuring-3-2021/',
      thumbnail: 'http://167.99.31.48/wp-content/uploads/2021/06/WcL9ZWI8n1hTp6IoKPwM7dpkYJ-200x300.jpg'
    },
    {
      title: 'The Conjuring 2 (2016) Subtitle Indonesia',
      quality: 'Bluray2016',
      type: 'Movie',
      upload: '2016',
      link: 'http://167.99.31.48/the-conjuring-2-2016/',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BZTlhZWY0YzAtMDA2Zi00NGVlLThhNzQtYjFjMWI0YjU0Yzg0XkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_SY1000_CR0,0,745,1000_AL_.jpg'
    },
    {
      title: 'The Conjuring (2013) Subtitle Indonesia',
      quality: 'Bluray2013',
      type: 'Movie',
      upload: '2013',
      link: 'http://167.99.31.48/the-conjuring-2013/',
      thumbnail: 'https://image.tmdb.org/t/p/w300/ejrD1lkCIQX26TO8k4gePsFpcyX.jpg'
    }
  ],
}
```
</details>
<details><summary><b>Postal Code</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
Nishino.search.kodepos('ponorogo')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      province: 'Sumatera Selatan',
      city: 'Lubuk Linggau',
      subdistrict: 'Lubuk Linggau Utara Dua (II)',
      urban: 'Ponorogo',
      postalcode: '31619'
    },
    {
      province: 'Jawa Timur',
      city: 'Ponorogo',
      subdistrict: 'Ngebel',
      urban: 'Wagir Lor',
      postalcode: '63493'
    },
    {
      province: 'Jawa Timur',
      city: 'Ponorogo',
      subdistrict: 'Ngebel',
      urban: 'Sempu',
      postalcode: '63493'
    },
    {
      province: 'Jawa Timur',
      city: 'Ponorogo',
      subdistrict: 'Ngebel',
      urban: 'Talun',
      postalcode: '63493'
    }
  ]
}
```
</details>

### Stalk

<details><summary><b>GitHub</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
Nishino.stalk.github('wiraardy')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    login: 'wiraardy',
    id: private,
    node_id: 'private',
    avatar_url: 'https://avatars.githubusercontent.com/u/90832242?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/wiraardy',
    html_url: 'https://github.com/wiraardy',
    followers_url: 'https://api.github.com/users/wiraardy/followers',
    following_url: 'https://api.github.com/users/wiraardy/following{/other_user}',
    gists_url: 'https://api.github.com/users/wiraardy/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/wiraardy/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/wiraardy/subscriptions',
    organizations_url: 'https://api.github.com/users/wiraardy/orgs',
    repos_url: 'https://api.github.com/users/wiraardy/repos',
    events_url: 'https://api.github.com/users/wiraardy/events{/privacy}',
    received_events_url: 'https://api.github.com/users/wiraardy/received_events',
    type: 'User',
    site_admin: false,
    name: 'wiraardy',
    company: 'null',
    blog: 'https://rem-api.dwiqi.my.id',
    location: 'Tokyo',
    email: null,
    hireable: null,
    bio: 'bruh',
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '2020-05-12T11:42:43Z',
    updated_at: '2022-01-10T15:38:59Z'
  },
  headers: {
    server: 'GitHub.com',
    vary: 'Accept, Accept-Encoding, Accept, X-Requested-With',
    etag: 'W/"605e0a1d5bfff1179c74f5d481f0fc3bbb951b076b251b60cbedd8cd7435f249"',
    connection: 'close'
  },
}
```
</details>

### Image

<details><summary><b>Pinterest</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
Nishino.image.pinterest('rem')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    img: 'https://i.pinimg.com/736x/97/5c/dd/975cdd87fe34a5832f07b8e17d5edd1d.jpg'
  }
}
```
</details>
<details><summary><b>Wallpaperflare</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
Nishino.image.wallpaperflare('loli')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    img: 'https://c4.wallpaperflare.com/wallpaper/618/686/459/soul-worker-stella-anime-style-games-loli-wallpaper-preview.jpg'
  }
}
```
</details>

### Hentai

<details><summary><b>Search</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
Nishino.hentai.search('loli')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      thumbnail: 'https://hentai.tv/wp-content/uploads/2022/04/6073873e248fa110420211618183998.png',
      title: 'Bishoujo Comic Lolicon Angel: Mitsu No Aji Episode 1',
      views: '863,590',
      url: 'https://hentai.tv/hentai/bishoujo-comic-lolicon-angel-mitsu-no-aji-episode-1/'
    },
    {
      thumbnail: 'https://hentai.tv/wp-content/uploads/2020/07/lolita-anime-1-cv1.png',
      title: 'Lolita Anime Episode 1',
      views: '1,825,447',
      url: 'https://hentai.tv/hentai/lolita-anime-episode-1/'
    },
    {
      thumbnail: 'https://hentai.tv/wp-content/uploads/2022/04/6073877ff308b110420211618184063.png',
      title: 'Hajimete No Orusuban Episode 2',
      views: '1,277,306',
      url: 'https://hentai.tv/hentai/hajimete-no-orusuban-episode-2/'
    }
  ]
}
```
</details>
<details><summary><b>Random</b></summary><br>

```js
Nishino.hentai.random()
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    image: 'https://hentai.tv/wp-content/uploads/2022/04/6073811fea320110420211618182431-204x300.jpg',
    title: 'Shinsei Futanari Idol: Dekatama Kei! Episode 1',
    publised: '2016-02-25',
    views: '2,217,295',
    url: 'https://hentai.tv/hentai/shinsei-futanari-idol-dekatama-kei-episode-1/'
  }
}
```
</details>

### News

<details><summary><b>Kompas News</b></summary><br>

> Required Parameters
> - (kategory) *type **String***
>
> *list kategori (terkini, terpopuler, global)*

```js
Nishino.news.kompas_news('terkini')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      judul: 'Kepala Negara Hanya Boleh Pakai Bus Saat Melayat Ratu Elizabeth II, Ada yang Protes',
      tanggal: '13/09/2022, 16:29 WIB',
      tautan: 'https://www.kompas.com/global/read/2022/09/13/162900770/kepala-negara-hanya-boleh-pakai-bus-saat-melayat-ratu-elizabeth-ii-ada',
      thumbnail: 'https://asset.kompas.com/crops/73FlJVscJ2oXyHRtFe77T1lTyt8=/0x69:1024x752/355x237/data/photo/2022/09/12/631e9bd0a6299.jpg'
    },
    {
      judul: 'Setelah 2,5 tahun, Diaspora Indonesia di Singapura Bisa Kopdar Lagi Tanpa Masker',
      tanggal: '13/09/2022, 16:00 WIB',
      tautan: 'https://www.kompas.com/global/read/2022/09/13/160000770/setelah-2-5-tahun-diaspora-indonesia-di-singapura-bisa-kopdar-lagi-tanpa',
      thumbnail: 'https://asset.kompas.com/crops/wwGrWNTjjgAfYuWN3SYLcX049lE=/0x0:0x0/355x237/data/photo/2022/09/13/63202911e8219.jpg'
    },
    {
      judul: 'PM Armenia Sebut 49 Tentaranya Tewas dalam Baku Tembak dengan Azerbaijan',
      tanggal: '13/09/2022, 15:31 WIB',
      tautan: 'https://www.kompas.com/global/read/2022/09/13/153100270/pm-armenia-sebut-49-tentaranya-tewas-dalam-baku-tembak-dengan-azerbaijan',
      thumbnail: 'https://asset.kompas.com/crops/Yqh09Y2Rl2r6T0ePvugGDRaweiA=/0x23:1895x1286/355x237/data/photo/2020/11/16/5fb1ca68e4acf.jpg'
    }
  ]
}
```
</details>

#### Text Pro

<details><summary><b>Light Style</b></summary><br>

> Required Parameters
> - (type) *type **String***

<details><summary><b>list type</b></summary><br>

```json
{
 neon_text_effect,
 holographic_3d,
 galaxy_style,
 technology_neon_light,
 neon_devil_wings,
 glitch_text_effect,
 impressive_glitch,
 neon_light_text_3d,
 thunder_text_effect,
 neon_light_on_brick_wall,
 neon_light_glitch,
 light_glow_sliced,
 summer_neon_light,
 neon_light_blackpink_logo,
 gradient_neon_light
}
```
 </details>
 
> - (text) *type **String***

```js
var type = 'holographic_3d'
var text = 'wiraardy'

Nishino.textpro.light_style(type, text)
.then(response => {
  console.log(response)
})
```
### output
```json
{
  result: {
    img: 'https://textpro.me/images/user_image/2022/09/63227636c9b4b.jpg'
  }
}
```
</details>

# NOTE

I will continue to update this package, so wait for my next update
For feature requests/report bugs/want to ask questions, please contact me at
* [Github](https://github.com/wiraardy)
* [Email](wiraardy112@gmail.com)