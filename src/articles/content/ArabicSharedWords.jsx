const words = [
  ['israf', 'ысырап'],
  ['sabır', 'сабыр'],
  ['akıl', 'ақыл'],
  ['fikir', 'пікір'],
  ['ilim', 'ілім'],
  ['kitap', 'кітап'],
  ['kalem', 'қалам'],
  ['tarih', 'тарих'],
  ['saat', 'сағат'],
  ['hesap', 'есеп'],
  ['haber', 'хабар'],
  ['cevap', 'жауап'],
  ['sebep', 'себеп'],
  ['şart', 'шарт'],
  ['niyet', 'ниет'],
  ['nasip', 'несіп'],
  ['dünya', 'дүние'],
  ['zaman', 'заман'],
  ['devlet', 'дәулет'],
  ['vatan', 'Отан'],
  ['halk', 'халық'],
  ['adalet', 'әділет'],
  ['hak', 'хақ'],
  ['hüküm', 'үкім'],
  ['hâkim', 'әкім'],
  ['emir', 'әмір'],
  ['hürmet', 'құрмет'],
  ['bereket', 'береке'],
  ['selam', 'сәлем'],
  ['emanet', 'аманат'],
  ['nasihat', 'насихат'],
  ['ibret', 'ғибрат'],
  ['edep', 'әдеп'],
  ['terbiye', 'тәрбие'],
  ['adet', 'әдет'],
  ['aşk', 'ғашық'],
  ['dost', 'дос'],
  ['dua', 'дұға'],
  ['iman', 'иман'],
  ['din', 'дін'],
  ['haram', 'харам'],
  ['helal', 'халал'],
  ['şeytan', 'шайтан'],
  ['ibadet', 'ғибадат'],
  ['medrese', 'медресе'],
  ['hadis', 'хадис'],
  ['ayet', 'аят'],
  ['kıyamet', 'қиямет'],
  ['kudret', 'құдірет'],
  ['şükür', 'шүкір'],
  ['nazar', 'назар'],
  ['kurban', 'құрбан'],
  ['bayram', 'мейрам'],
  ['dert', 'дерт'],
  ['hasta', 'науқас'],
  ['ruh', 'рух'],
  ['can', 'жан'],
  ['nefis', 'нәпсі'],
  ['taraf', 'тарап'],
  ['sınır', 'шекара'],
  ['ders', 'дәріс'],
  ['sınıf', 'сынып'],
  ['öğrenci', 'оқушы'],
  ['imtihan', 'емтихан'],
  ['mesele', 'мәселе'],
  ['mana', 'мағына'],
  ['harf', 'әріп'],
  ['sayı', 'сан'],
  ['derece', 'дәреже'],
  ['tecrübe', 'тәжірибе'],
  ['amel', 'амал'],
  ['kaide', 'қағида'],
  ['tertip', 'тәртіп'],
  ['siyaset', 'саясат'],
  ['mal', 'мал'],
  ['mülk', 'мүлік'],
  ['hizmet', 'қызмет'],
  ['edebiyat', 'әдебиет'],
  ['hikâye', 'хикая'],
  ['makale', 'мақала'],
  ['defter', 'дәптер'],
  ['hareket', 'әрекет'],
  ['ihtimal', 'ықтимал'],
  ['mümkün', 'мүмкін'],
  ['mecbur', 'мәжбүр'],
  ['fayda', 'пайда'],
  ['zarar', 'зиян'],
  ['afet', 'апат'],
  ['ecel', 'ажал'],
  ['cenaze', 'жаназа'],
  ['seyahat', 'саяхат'],
  ['memleket', 'мемлекет'],
  ['vakit', 'уақыт'],
  ['hazır', 'әзір'],
  ['hakikat', 'ақиқат'],
  ['doğru', 'дұрыс'],
  ['hata', 'қате'],
  ['günah', 'күнә'],
  ['ceza', 'жаза'],
  ['kabul', 'қабыл'],
  ['talep', 'талап'],
  ['meclis', 'мәжіліс'],
  ['bilgi', 'білім'],
  ['açık', 'ашық'],
  ['ümit', 'үміт'],
  ['korku', 'қорқыныш'],
  ['azap', 'азап'],
];

export default function ArabicSharedWords() {
  return (
    <div className="article-content">
      <p>
        Түрік және қазақ тілдерінде дыбысталуы немесе мағынасы ұқсас көптеген
        сөздер бар. Олардың едәуір бөлігі араб тілінен енген.
      </p>

      <div className="article-content__table-wrapper">
        <table className="article-content__table">
          <thead>
            <tr>
              <th>Түрікше</th>
              <th>Қазақша</th>
            </tr>
          </thead>

          <tbody>
            {words.map(([turkish, kazakh]) => (
              <tr key={`${turkish}-${kazakh}`}>
                <td lang="tr">
                  <strong>{turkish}</strong>
                </td>
                <td lang="kk">{kazakh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
