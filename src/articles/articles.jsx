import OkylymHowToRead from './content/OkylymHowToRead';
import ExtremeTurkishLearning from './content/ExtremeTurkishLearning';
import TurkishAlterEgo from './content/TurkishAlterEgo';
import UnusualTurkishLearningMethods from './content/UnusualTurkishLearningMethods';

const articles = [
  {
  id: 1,
  slug: 'okylym-how-to-read-turkish',
  section: 'okylym',
  title: 'Оқылымды меңгеру: түрікше оқуды қалай үйренуге болады?',
  level: 'Барлық деңгей',
  date: '2026-09-17',
  content: <OkylymHowToRead />,
  },
  {
    id: 2,
    slug: 'extreme-way-to-learn-turkish-fast',
    section: 'blog',
    title: 'Түрікшені ТЕЗ үйренудің ең экстремалды тәсілі',
    description: 'Түрік тілін толық immersion тәсілімен үйренуге арналған экстремалды оқу жүйесі.',
    level: 'Барлық деңгей',
    date: '2026-09-17',
    content: <ExtremeTurkishLearning />,
  },
  {
    id: 3,
    slug: 'turkish-alter-ego',
    section: 'blog',
    title: 'Түрік альтер-эгосы',
    description: 'Түрік тілін күнделікті өмірдің бір бөлігіне айналдыру тәсілі.',
    level: 'Барлық деңгей',
    date: '2026-09-17',
    content: <TurkishAlterEgo />,
  },
  {
    id: 11,
    slug: 'unusual-turkish-learning-methods',
    section: 'blog',
    title: 'Түрік тілін үйренудің ерекше тәсілдері',
    description: 'Түрік тілін күнделікті қызығушылықтар, контент, хобби және өмір салты арқылы үйренудің 33 тәсілі.',
    level: 'Барлық деңгей',
    date: '2026-09-17',
    content: <UnusualTurkishLearningMethods />,
  }
];

export default articles;
