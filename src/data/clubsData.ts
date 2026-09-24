import { Club } from '../types/game';

export const CLUBS_DATA: Record<string, Club> = {
  'real-madrid': {
    id: 'real-madrid',
    nameEn: 'Real Madrid',
    nameAr: 'ريال مدريد',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/real-madrid.png',
    aliases: ['Real Madrid', 'real madrid', 'real-madrid', 'real_madrid', 'ريال مدريد', 'الملكي', 'Real Madrid CF', 'RMA'],
    primaryColor: '#FFFFFF',
    secondaryColor: '#00529F'
  },
  'barcelona': {
    id: 'barcelona',
    nameEn: 'Barcelona',
    nameAr: 'برشلونة',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/barcelona.png',
    aliases: ['Barcelona', 'barcelona', 'fc barcelona', 'FC Barcelona', 'برشلونة', 'البارسا', 'FCB'],
    primaryColor: '#A50044',
    secondaryColor: '#004D98'
  },
  'manchester-united': {
    id: 'manchester-united',
    nameEn: 'Manchester United',
    nameAr: 'مانشستر يونايتد',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/manchester-united.png',
    aliases: ['Manchester United', 'manchester united', 'manchester-united', 'manchester_united', 'مانشستر يونايتد', 'اليونايتد', 'الشياطين الحمر', 'Man Utd', 'MUFC'],
    primaryColor: '#DA291C',
    secondaryColor: '#FBE122'
  },
  'liverpool': {
    id: 'liverpool',
    nameEn: 'Liverpool',
    nameAr: 'ليفربول',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/liverpool.png',
    aliases: ['Liverpool', 'liverpool', 'ليفربول', 'الريدز', 'Liverpool FC', 'LFC'],
    primaryColor: '#C8102E',
    secondaryColor: '#00B2A9'
  },
  'arsenal': {
    id: 'arsenal',
    nameEn: 'Arsenal',
    nameAr: 'أرسنال',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/arsenal.png',
    aliases: ['Arsenal', 'arsenal', 'أرسنال', 'الغانرز', 'المدفعجية', 'Arsenal FC', 'AFC'],
    primaryColor: '#EF0107',
    secondaryColor: '#063672'
  },
  'chelsea': {
    id: 'chelsea',
    nameEn: 'Chelsea',
    nameAr: 'تشيلسي',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/chelsea.png',
    aliases: ['Chelsea', 'chelsea', 'تشيلسي', 'البلوز', 'Chelsea FC', 'CFC'],
    primaryColor: '#034694',
    secondaryColor: '#EE242C'
  },
  'manchester-city': {
    id: 'manchester-city',
    nameEn: 'Manchester City',
    nameAr: 'مانشستر سيتي',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/manchester-city.png',
    aliases: ['Manchester City', 'manchester city', 'manchester-city', 'manchester_city', 'مانشستر سيتي', 'السيتي', 'Man City', 'MCFC'],
    primaryColor: '#6CABDD',
    secondaryColor: '#1C2C5B'
  },
  'tottenham': {
    id: 'tottenham',
    nameEn: 'Tottenham Hotspur',
    nameAr: 'توتنهام هوتسبير',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/tottenham.png',
    aliases: ['Tottenham', 'tottenham', 'Tottenham Hotspur', 'توتنهام', 'السبيرز', 'Spurs', 'THFC'],
    primaryColor: '#132257',
    secondaryColor: '#FFFFFF'
  },
  'juventus': {
    id: 'juventus',
    nameEn: 'Juventus',
    nameAr: 'يوفنتوس',
    countryAr: 'إيطاليا',
    defaultLogo: '/logos/juventus.png',
    aliases: ['Juventus', 'juventus', 'يوفنتوس', 'اليوفي', 'السيدة العجوز', 'Juve', 'Juventus FC'],
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF'
  },
  'ac-milan': {
    id: 'ac-milan',
    nameEn: 'AC Milan',
    nameAr: 'ميلان',
    countryAr: 'إيطاليا',
    defaultLogo: '/logos/ac-milan.png',
    aliases: ['AC Milan', 'ac milan', 'ac-milan', 'ac_milan', 'Milan', 'ميلان', 'إيه سي ميلان', 'الروسونيري'],
    primaryColor: '#FB090B',
    secondaryColor: '#000000'
  },
  'inter-milan': {
    id: 'inter-milan',
    nameEn: 'Inter Milan',
    nameAr: 'إنتر ميلان',
    countryAr: 'إيطاليا',
    defaultLogo: '/logos/inter-milan.png',
    aliases: ['Inter Milan', 'inter milan', 'inter-milan', 'inter_milan', 'Inter', 'إنتر ميلان', 'الإنتر', 'النيراتزوري'],
    primaryColor: '#010E80',
    secondaryColor: '#000000'
  },
  'bayern-munich': {
    id: 'bayern-munich',
    nameEn: 'Bayern Munich',
    nameAr: 'بايرن ميونخ',
    countryAr: 'ألمانيا',
    defaultLogo: '/logos/bayern-munich.png',
    aliases: ['Bayern Munich', 'bayern munich', 'bayern-munich', 'بايرن ميونخ', 'البافاري', 'FC Bayern', 'FCB'],
    primaryColor: '#DC052D',
    secondaryColor: '#0066B2'
  },
  'borussia-dortmund': {
    id: 'borussia-dortmund',
    nameEn: 'Borussia Dortmund',
    nameAr: 'بوروسيا دورتموند',
    countryAr: 'ألمانيا',
    defaultLogo: '/logos/borussia-dortmund.png',
    aliases: ['Borussia Dortmund', 'borussia dortmund', 'dortmund', 'بوروسيا دورتموند', 'دورتموند', 'BVB'],
    primaryColor: '#FDE100',
    secondaryColor: '#000000'
  },
  'paris-saint-germain': {
    id: 'paris-saint-germain',
    nameEn: 'Paris Saint-Germain',
    nameAr: 'باريس سان جيرمان',
    countryAr: 'فرنسا',
    defaultLogo: '/logos/paris-saint-germain.png',
    aliases: ['Paris Saint-Germain', 'paris saint-germain', 'paris saint germain', 'psg', 'باريس سان جيرمان', 'باريس', 'PSG'],
    primaryColor: '#004170',
    secondaryColor: '#DA291C'
  },
  'atletico-madrid': {
    id: 'atletico-madrid',
    nameEn: 'Atletico Madrid',
    nameAr: 'أتلتيكو مدريد',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/atletico-madrid.png',
    aliases: ['Atletico Madrid', 'atletico madrid', 'atletico-madrid', 'أتلتيكو مدريد', 'الروخيبلانكوس', 'Atleti', 'ATM'],
    primaryColor: '#CB3524',
    secondaryColor: '#272E61'
  },
  'sevilla': {
    id: 'sevilla',
    nameEn: 'Sevilla',
    nameAr: 'إشبيلية',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/sevilla.png',
    aliases: ['Sevilla', 'sevilla', 'إشبيلية', 'Sevilla FC'],
    primaryColor: '#D4001F',
    secondaryColor: '#FFFFFF'
  },
  'napoli': {
    id: 'napoli',
    nameEn: 'Napoli',
    nameAr: 'نابولي',
    countryAr: 'إيطاليا',
    defaultLogo: '/logos/napoli.png',
    aliases: ['Napoli', 'napoli', 'نابولي', 'SSC Napoli'],
    primaryColor: '#12A0D7',
    secondaryColor: '#FFFFFF'
  },
  'roma': {
    id: 'roma',
    nameEn: 'AS Roma',
    nameAr: 'روما',
    countryAr: 'إيطاليا',
    defaultLogo: '/logos/roma.png',
    aliases: ['AS Roma', 'roma', 'روما', 'ذئاب العاصمة', 'Roma'],
    primaryColor: '#8E1F2F',
    secondaryColor: '#F0BC42'
  },
  'sporting-cp': {
    id: 'sporting-cp',
    nameEn: 'Sporting CP',
    nameAr: 'سبورتينغ لشبونة',
    countryAr: 'البرتغال',
    defaultLogo: '/logos/sporting-cp.png',
    aliases: ['Sporting CP', 'sporting cp', 'sporting lisbon', 'سبورتينغ لشبونة', 'سبورتينغ'],
    primaryColor: '#008057',
    secondaryColor: '#FFFFFF'
  },
  'benfica': {
    id: 'benfica',
    nameEn: 'Benfica',
    nameAr: 'بنفيكا',
    countryAr: 'البرتغال',
    defaultLogo: '/logos/benfica.png',
    aliases: ['Benfica', 'benfica', 'بنفيكا', 'SL Benfica'],
    primaryColor: '#E11B22',
    secondaryColor: '#FFFFFF'
  },
  'porto': {
    id: 'porto',
    nameEn: 'Porto',
    nameAr: 'بورتو',
    countryAr: 'البرتغال',
    defaultLogo: '/logos/porto.png',
    aliases: ['Porto', 'porto', 'بورتو', 'FC Porto'],
    primaryColor: '#002B7F',
    secondaryColor: '#FFFFFF'
  },
  'ajax': {
    id: 'ajax',
    nameEn: 'Ajax Amsterdam',
    nameAr: 'أياكس أمستردام',
    countryAr: 'هولندا',
    defaultLogo: '/logos/ajax.png',
    aliases: ['Ajax', 'ajax', 'أياكس', 'أياكس أمستردام', 'Ajax Amsterdam'],
    primaryColor: '#D2122E',
    secondaryColor: '#FFFFFF'
  },
  'monaco': {
    id: 'monaco',
    nameEn: 'AS Monaco',
    nameAr: 'موناكو',
    countryAr: 'فرنسا',
    defaultLogo: '/logos/monaco.png',
    aliases: ['AS Monaco', 'monaco', 'موناكو'],
    primaryColor: '#E51B24',
    secondaryColor: '#FFFFFF'
  },
  'lyon': {
    id: 'lyon',
    nameEn: 'Lyon',
    nameAr: 'أولمبيك ليون',
    countryAr: 'فرنسا',
    defaultLogo: '/logos/lyon.png',
    aliases: ['Lyon', 'lyon', 'أولمبيك ليون', 'ليون', 'Olympique Lyonnais'],
    primaryColor: '#002B7F',
    secondaryColor: '#DA291C'
  },
  'marseille': {
    id: 'marseille',
    nameEn: 'Marseille',
    nameAr: 'أولمبيك مارسيليا',
    countryAr: 'فرنسا',
    defaultLogo: '/logos/marseille.png',
    aliases: ['Marseille', 'marseille', 'مارسيليا', 'أولمبيك مارسيليا', 'Olympique de Marseille'],
    primaryColor: '#2FAEE0',
    secondaryColor: '#FFFFFF'
  },
  'bayer-leverkusen': {
    id: 'bayer-leverkusen',
    nameEn: 'Bayer Leverkusen',
    nameAr: 'باير ليفركوزن',
    countryAr: 'ألمانيا',
    defaultLogo: '/logos/bayer-leverkusen.png',
    aliases: ['Bayer Leverkusen', 'leverkusen', 'باير ليفركوزن', 'ليفركوزن'],
    primaryColor: '#E32219',
    secondaryColor: '#000000'
  },
  'aston-villa': {
    id: 'aston-villa',
    nameEn: 'Aston Villa',
    nameAr: 'أستون فيلا',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/aston-villa.png',
    aliases: ['Aston Villa', 'aston villa', 'أستون فيلا', 'فيلا'],
    primaryColor: '#95BFE5',
    secondaryColor: '#670E36'
  },
  'newcastle': {
    id: 'newcastle',
    nameEn: 'Newcastle United',
    nameAr: 'نيوكاسل يونايتد',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/newcastle.png',
    aliases: ['Newcastle United', 'newcastle', 'نيوكاسل يونايتد', 'نيوكاسل'],
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF'
  },
  'everton': {
    id: 'everton',
    nameEn: 'Everton',
    nameAr: 'إيفرتون',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/everton.png',
    aliases: ['Everton', 'everton', 'إيفرتون', 'التوفيز'],
    primaryColor: '#003399',
    secondaryColor: '#FFFFFF'
  },
  'west-ham': {
    id: 'west-ham',
    nameEn: 'West Ham United',
    nameAr: 'وست هام يونايتد',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/west-ham.svg',
    aliases: ['West Ham United', 'west ham', 'وست هام يونايتد', 'وست هام', 'الهامرز'],
    primaryColor: '#7A263A',
    secondaryColor: '#1BB1E7'
  },
  'leicester-city': {
    id: 'leicester-city',
    nameEn: 'Leicester City',
    nameAr: 'ليستر سيتي',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/leicester-city.svg',
    aliases: ['Leicester City', 'leicester', 'ليستر سيتي', 'الثعالب'],
    primaryColor: '#003090',
    secondaryColor: '#FDBE11'
  },
  'villarreal': {
    id: 'villarreal',
    nameEn: 'Villarreal',
    nameAr: 'فياريال',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/villarreal.png',
    aliases: ['Villarreal', 'villarreal', 'فياريال', 'الغواصات الصفراء'],
    primaryColor: '#FFE000',
    secondaryColor: '#005CA9'
  },
  'valencia': {
    id: 'valencia',
    nameEn: 'Valencia',
    nameAr: 'فالنسيا',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/valencia.png',
    aliases: ['Valencia', 'valencia', 'فالنسيا', 'الخفافيش'],
    primaryColor: '#EE7500',
    secondaryColor: '#000000'
  },
  'real-sociedad': {
    id: 'real-sociedad',
    nameEn: 'Real Sociedad',
    nameAr: 'ريال سوسيداد',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/real-sociedad.png',
    aliases: ['Real Sociedad', 'real sociedad', 'ريال سوسيداد'],
    primaryColor: '#0067B1',
    secondaryColor: '#FFFFFF'
  },
  'werder-bremen': {
    id: 'werder-bremen',
    nameEn: 'Werder Bremen',
    nameAr: 'فيردر بريمن',
    countryAr: 'ألمانيا',
    defaultLogo: '/logos/werder-bremen.png',
    aliases: ['Werder Bremen', 'werder bremen', 'فيردر بريمن'],
    primaryColor: '#1B7E3E',
    secondaryColor: '#FFFFFF'
  },
  'schalke': {
    id: 'schalke',
    nameEn: 'FC Schalke 04',
    nameAr: 'شالكه 04',
    countryAr: 'ألمانيا',
    defaultLogo: '/logos/schalke.png',
    aliases: ['Schalke', 'schalke 04', 'شالكه'],
    primaryColor: '#004D9D',
    secondaryColor: '#FFFFFF'
  },
  'basel': {
    id: 'basel',
    nameEn: 'FC Basel',
    nameAr: 'بازل السويسري',
    countryAr: 'سويسرا',
    defaultLogo: '/logos/basel.png',
    aliases: ['FC Basel', 'basel', 'بازل'],
    primaryColor: '#BA171E',
    secondaryColor: '#123C73'
  },
  'dinamo-zagreb': {
    id: 'dinamo-zagreb',
    nameEn: 'Dinamo Zagreb',
    nameAr: 'دينامو زغرب',
    countryAr: 'كرواتيا',
    defaultLogo: '/logos/dinamo-zagreb.png',
    aliases: ['Dinamo Zagreb', 'dinamo zagreb', 'دينامو زغرب'],
    primaryColor: '#003DA5',
    secondaryColor: '#FFFFFF'
  },
  'psv': {
    id: 'psv',
    nameEn: 'PSV Eindhoven',
    nameAr: 'آيندهوفن',
    countryAr: 'هولندا',
    defaultLogo: '/logos/psv.png',
    aliases: ['PSV Eindhoven', 'psv', 'آيندهوفن', 'بي إس في'],
    primaryColor: '#DA291C',
    secondaryColor: '#FFFFFF'
  },
  'feyenoord': {
    id: 'feyenoord',
    nameEn: 'Feyenoord',
    nameAr: 'فاينورد',
    countryAr: 'هولندا',
    defaultLogo: '/logos/feyenoord.png',
    aliases: ['Feyenoord', 'feyenoord', 'فاينورد'],
    primaryColor: '#ED1C24',
    secondaryColor: '#FFFFFF'
  },
  'al-nassr': {
    id: 'al-nassr',
    nameEn: 'Al-Nassr',
    nameAr: 'النصر السعودي',
    countryAr: 'السعودية',
    defaultLogo: '/logos/al-nassr.svg',
    aliases: ['Al-Nassr', 'al nassr', 'al-nassr fc', 'النصر', 'النصر السعودي', 'العالمي'],
    primaryColor: '#FFDD00',
    secondaryColor: '#002D62'
  },
  'al-hilal': {
    id: 'al-hilal',
    nameEn: 'Al-Hilal',
    nameAr: 'الهلال السعودي',
    countryAr: 'السعودية',
    defaultLogo: '/logos/al-hilal.svg',
    aliases: ['Al-Hilal', 'al hilal', 'al-hilal sfc', 'الهلال', 'الهلال السعودي', 'الزعيم'],
    primaryColor: '#0057B7',
    secondaryColor: '#FFFFFF'
  },
  'al-ittihad': {
    id: 'al-ittihad',
    nameEn: 'Al-Ittihad',
    nameAr: 'الاتحاد السعودي',
    countryAr: 'السعودية',
    defaultLogo: '/logos/al-ittihad.svg',
    aliases: ['Al-Ittihad', 'al ittihad', 'الاتحاد', 'الاتحاد السعودي', 'العميد'],
    primaryColor: '#FFD700',
    secondaryColor: '#000000'
  },
  'al-ahly': {
    id: 'al-ahly',
    nameEn: 'Al Ahly',
    nameAr: 'الأهلي المصري',
    countryAr: 'مصر',
    defaultLogo: '/logos/al-ahly.svg',
    aliases: ['Al Ahly', 'al ahly', 'الأهلي', 'الأهلي المصري', 'نادي القرن'],
    primaryColor: '#D91424',
    secondaryColor: '#D4AF37'
  },
  'inter-miami': {
    id: 'inter-miami',
    nameEn: 'Inter Miami CF',
    nameAr: 'إنتر ميامي',
    countryAr: 'أمريكا',
    defaultLogo: '/logos/inter-miami.svg',
    aliases: ['Inter Miami', 'inter miami', 'إنتر ميامي'],
    primaryColor: '#F5B6CD',
    secondaryColor: '#000000'
  },
  'santos': {
    id: 'santos',
    nameEn: 'Santos FC',
    nameAr: 'سانتوس البرازيلي',
    countryAr: 'البرازيل',
    defaultLogo: '/logos/santos.svg',
    aliases: ['Santos', 'santos fc', 'سانتوس'],
    primaryColor: '#FFFFFF',
    secondaryColor: '#000000'
  },
  'boca-juniors': {
    id: 'boca-juniors',
    nameEn: 'Boca Juniors',
    nameAr: 'بوكا جونيورز',
    countryAr: 'الأرجنتين',
    defaultLogo: '/logos/boca-juniors.svg',
    aliases: ['Boca Juniors', 'boca', 'بوكا جونيورز', 'بوكا'],
    primaryColor: '#003566',
    secondaryColor: '#FFC300'
  },
  'river-plate': {
    id: 'river-plate',
    nameEn: 'River Plate',
    nameAr: 'ريفر بليت',
    countryAr: 'الأرجنتين',
    defaultLogo: '/logos/river-plate.svg',
    aliases: ['River Plate', 'river plate', 'ريفر بليت', 'ريفر'],
    primaryColor: '#FFFFFF',
    secondaryColor: '#ED1C24'
  },
  'flamengo': {
    id: 'flamengo',
    nameEn: 'Flamengo',
    nameAr: 'فلامنغو',
    countryAr: 'البرازيل',
    defaultLogo: '/logos/flamengo.svg',
    aliases: ['Flamengo', 'flamengo', 'فلامنغو', 'فلامينجو', 'CR Flamengo'],
    primaryColor: '#C00000',
    secondaryColor: '#000000'
  },
  'brighton': {
    id: 'brighton',
    nameEn: 'Brighton & Hove Albion',
    nameAr: 'برايتون',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/brighton.svg',
    aliases: ['Brighton', 'brighton', 'برايتون', 'Brighton and Hove Albion'],
    primaryColor: '#0057B8',
    secondaryColor: '#FFFFFF'
  },
  'galatasaray': {
    id: 'galatasaray',
    nameEn: 'Galatasaray',
    nameAr: 'غلطة سراي',
    countryAr: 'تركيا',
    defaultLogo: '/logos/galatasaray.svg',
    aliases: ['Galatasaray', 'galatasaray', 'غلطة سراي', 'جالاتا سراي'],
    primaryColor: '#A90432',
    secondaryColor: '#FDB912'
  },
  'lille': {
    id: 'lille',
    nameEn: 'Lille OSC',
    nameAr: 'ليل الفرنسي',
    countryAr: 'فرنسا',
    defaultLogo: '/logos/lille.png',
    aliases: ['Lille', 'lille', 'ليل', 'LOSC Lille'],
    primaryColor: '#E01E2B',
    secondaryColor: '#1A2F50'
  },
  'rennes': {
    id: 'rennes',
    nameEn: 'Stade Rennais',
    nameAr: 'رين الفرنسي',
    countryAr: 'فرنسا',
    defaultLogo: '/logos/rennes.svg',
    aliases: ['Rennes', 'rennes', 'رين', 'Stade Rennais'],
    primaryColor: '#E2001A',
    secondaryColor: '#000000'
  },
  'southampton': {
    id: 'southampton',
    nameEn: 'Southampton',
    nameAr: 'ساوثهامبتون',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/southampton.svg',
    aliases: ['Southampton', 'southampton', 'ساوثهامبتون', 'القديسين'],
    primaryColor: '#D71920',
    secondaryColor: '#FFFFFF'
  },
  'stuttgart': {
    id: 'stuttgart',
    nameEn: 'VfB Stuttgart',
    nameAr: 'شتوتغارت',
    countryAr: 'ألمانيا',
    defaultLogo: '/logos/stuttgart.png',
    aliases: ['Stuttgart', 'stuttgart', 'شتوتغارت'],
    primaryColor: '#E32219',
    secondaryColor: '#FFFFFF'
  },
  'celtic': {
    id: 'celtic',
    nameEn: 'Celtic FC',
    nameAr: 'سيلتيك الاسكتلندي',
    countryAr: 'اسكتلندا',
    defaultLogo: '/logos/celtic.svg',
    aliases: ['Celtic', 'celtic', 'سيلتيك', 'سيلتك'],
    primaryColor: '#018749',
    secondaryColor: '#FFFFFF'
  },
  'leipzig': {
    id: 'leipzig',
    nameEn: 'RB Leipzig',
    nameAr: 'لايبزيغ',
    countryAr: 'ألمانيا',
    defaultLogo: '/logos/leipzig.png',
    aliases: ['RB Leipzig', 'leipzig', 'لايبزيغ', 'لايبزغ'],
    primaryColor: '#DD0741',
    secondaryColor: '#0C2340'
  },
  'girona': {
    id: 'girona',
    nameEn: 'Girona FC',
    nameAr: 'جيرونا',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/girona.svg',
    aliases: ['Girona', 'girona', 'جيرونا'],
    primaryColor: '#CD1226',
    secondaryColor: '#FFFFFF'
  },
  'fenerbahce': {
    id: 'fenerbahce',
    nameEn: 'Fenerbahçe',
    nameAr: 'فنربخشة',
    countryAr: 'تركيا',
    defaultLogo: '/logos/fenerbahce.svg',
    aliases: ['Fenerbahce', 'fenerbahce', 'فنربخشة', 'فنرباغتشة'],
    primaryColor: '#002D72',
    secondaryColor: '#FFF000'
  },
  'racing-club': {
    id: 'racing-club',
    nameEn: 'Racing Club',
    nameAr: 'راسينغ كلوب',
    countryAr: 'الأرجنتين',
    defaultLogo: '/logos/racing-club.svg',
    aliases: ['Racing Club', 'racing', 'راسينغ كلوب'],
    primaryColor: '#75AADB',
    secondaryColor: '#FFFFFF'
  },
  'bordeaux': {
    id: 'bordeaux',
    nameEn: 'Girondins de Bordeaux',
    nameAr: 'بوردو',
    countryAr: 'فرنسا',
    defaultLogo: '/logos/bordeaux.svg',
    aliases: ['Bordeaux', 'bordeaux', 'بوردو'],
    primaryColor: '#002B49',
    secondaryColor: '#FFFFFF'
  },
  'genk': {
    id: 'genk',
    nameEn: 'KRC Genk',
    nameAr: 'جينك البلجيكي',
    countryAr: 'بلجيكا',
    defaultLogo: '/logos/genk.svg',
    aliases: ['Genk', 'genk', 'جينك'],
    primaryColor: '#003399',
    secondaryColor: '#FFFFFF'
  },
  'wydad': {
    id: 'wydad',
    nameEn: 'Wydad AC',
    nameAr: 'الوداد الرياضي',
    countryAr: 'المغرب',
    defaultLogo: '/logos/wydad.svg',
    aliases: ['Wydad', 'wydad', 'الوداد', 'الوداد البيضاوي', 'وداد الأمة'],
    primaryColor: '#C8102E',
    secondaryColor: '#FFFFFF'
  },
  'avai': {
    id: 'avai',
    nameEn: 'Avaí FC',
    nameAr: 'أفاي البرازيلي',
    countryAr: 'البرازيل',
    defaultLogo: '/logos/avai.svg',
    aliases: ['Avai', 'avai', 'أفاي', 'افاي'],
    primaryColor: '#0067B1',
    secondaryColor: '#FFFFFF'
  },
  'vitoria-guimaraes': {
    id: 'vitoria-guimaraes',
    nameEn: 'Vitória de Guimarães',
    nameAr: 'فيتوريا غيماريش',
    countryAr: 'البرتغال',
    defaultLogo: '/logos/vitoria-guimaraes.svg',
    aliases: ['Vitoria Guimaraes', 'فيتوريا غيماريش', 'غيماريش'],
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF'
  },
  'leeds': {
    id: 'leeds',
    nameEn: 'Leeds United',
    nameAr: 'ليدز يونايتد',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/leeds.svg',
    aliases: ['Leeds', 'leeds', 'Leeds United', 'ليدز', 'ليدز يونايتد'],
    primaryColor: '#1D428A',
    secondaryColor: '#FFCD00'
  },
  'birmingham': {
    id: 'birmingham',
    nameEn: 'Birmingham City',
    nameAr: 'برمنغهام سيتي',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/birmingham.svg',
    aliases: ['Birmingham', 'birmingham', 'برمنغهام', 'برمنغهام سيتي'],
    primaryColor: '#0000FF',
    secondaryColor: '#FFFFFF'
  },
  'reading': {
    id: 'reading',
    nameEn: 'Reading FC',
    nameAr: 'ريدينغ',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/reading.svg',
    aliases: ['Reading', 'reading', 'ريدينغ', 'ريدينج'],
    primaryColor: '#004494',
    secondaryColor: '#FFFFFF'
  },
  'crystal-palace': {
    id: 'crystal-palace',
    nameEn: 'Crystal Palace',
    nameAr: 'كريستال بالاس',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/crystal-palace.svg',
    aliases: ['Crystal Palace', 'crystal palace', 'كريستال بالاس', 'بالاس'],
    primaryColor: '#1B458F',
    secondaryColor: '#C4122E'
  },
  'wolves': {
    id: 'wolves',
    nameEn: 'Wolverhampton Wanderers',
    nameAr: 'وولفرهامبتون',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/wolves.svg',
    aliases: ['Wolves', 'wolves', 'Wolverhampton', 'وولفرهامبتون', 'الذئاب'],
    primaryColor: '#FDB913',
    secondaryColor: '#231F20'
  },
  'koln': {
    id: 'koln',
    nameEn: 'FC Köln',
    nameAr: 'كولن الألماني',
    countryAr: 'ألمانيا',
    defaultLogo: '/logos/koln.svg',
    aliases: ['Koln', 'koln', 'Köln', 'كولن', 'اف سي كولن'],
    primaryColor: '#ED1C24',
    secondaryColor: '#FFFFFF'
  },
  'aik': {
    id: 'aik',
    nameEn: 'AIK Fotboll',
    nameAr: 'أيك سولنا السويدي',
    countryAr: 'السويد',
    defaultLogo: '/logos/aik.svg',
    aliases: ['AIK', 'aik', 'أيك سولنا', 'ايك سولنا'],
    primaryColor: '#002B49',
    secondaryColor: '#FFD700'
  },
  'dinamo-tbilisi': {
    id: 'dinamo-tbilisi',
    nameEn: 'Dinamo Tbilisi',
    nameAr: 'دينامو تبليسي',
    countryAr: 'جورجيا',
    defaultLogo: '/logos/dinamo-tbilisi.svg',
    aliases: ['Dinamo Tbilisi', 'دينامو تبليسي', 'تبليسي'],
    primaryColor: '#003399',
    secondaryColor: '#FFFFFF'
  },
  'rostavi': {
    id: 'rostavi',
    nameEn: 'FC Rustavi',
    nameAr: 'روستافي',
    countryAr: 'جورجيا',
    defaultLogo: '/logos/rostavi.svg',
    aliases: ['Rustavi', 'rostavi', 'روستافي'],
    primaryColor: '#D6083B',
    secondaryColor: '#FFFFFF'
  },
  'dinamo-batumi': {
    id: 'dinamo-batumi',
    nameEn: 'Dinamo Batumi',
    nameAr: 'دينامو باتومي',
    countryAr: 'جورجيا',
    defaultLogo: '/logos/dinamo-batumi.svg',
    aliases: ['Dinamo Batumi', 'دينامو باتومي', 'باتومي'],
    primaryColor: '#005BBB',
    secondaryColor: '#FFFFFF'
  },
  'rubin-kazan': {
    id: 'rubin-kazan',
    nameEn: 'Rubin Kazan',
    nameAr: 'روبين كازان',
    countryAr: 'روسيا',
    defaultLogo: '/logos/rubin-kazan.svg',
    aliases: ['Rubin Kazan', 'rubin', 'روبين كازان', 'روبن كازان'],
    primaryColor: '#9B111E',
    secondaryColor: '#008000'
  },
  'athletic-bilbao': {
    id: 'athletic-bilbao',
    nameEn: 'Athletic Club Bilbao',
    nameAr: 'أتلتيك بلباو',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/athletic-bilbao.svg',
    aliases: ['Athletic Bilbao', 'bilbao', 'أتلتيك بلباو', 'بلباو', 'أتلتيكو بلباو'],
    primaryColor: '#EE2524',
    secondaryColor: '#FFFFFF'
  },
  'stromsgodset': {
    id: 'stromsgodset',
    nameEn: 'Strømsgodset',
    nameAr: 'سترومسغودست',
    countryAr: 'النرويج',
    defaultLogo: '/logos/stromsgodset.svg',
    aliases: ['Stromsgodset', 'سترومسغودست', 'سترومسجودست'],
    primaryColor: '#00205B',
    secondaryColor: '#FFFFFF'
  },
  'heerenveen': {
    id: 'heerenveen',
    nameEn: 'SC Heerenveen',
    nameAr: 'هيرينفين',
    countryAr: 'هولندا',
    defaultLogo: '/logos/heerenveen.svg',
    aliases: ['Heerenveen', 'هيرينفين', 'هيرنفين'],
    primaryColor: '#0047AB',
    secondaryColor: '#FFFFFF'
  },
  'vitesse': {
    id: 'vitesse',
    nameEn: 'Vitesse Arnhem',
    nameAr: 'فيتيسه أرنهم',
    countryAr: 'هولندا',
    defaultLogo: '/logos/vitesse.svg',
    aliases: ['Vitesse', 'فيتيسه', 'فيتيس'],
    primaryColor: '#FFE600',
    secondaryColor: '#000000'
  },
  'alaves': {
    id: 'alaves',
    nameEn: 'Deportivo Alavés',
    nameAr: 'ديبورتيفو ألافيس',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/alaves.svg',
    aliases: ['Alaves', 'alaves', 'ديبورتيفو ألافيس', 'ألافيس', 'الافيس'],
    primaryColor: '#005CA9',
    secondaryColor: '#FFFFFF'
  },
  'fluminense': {
    id: 'fluminense',
    nameEn: 'Fluminense FC',
    nameAr: 'فلومينينسي',
    countryAr: 'البرازيل',
    defaultLogo: '/logos/fluminense.svg',
    aliases: ['Fluminense', 'fluminense', 'فلومينينسي', 'فلوميننسي'],
    primaryColor: '#780016',
    secondaryColor: '#006644'
  },
  'watford': {
    id: 'watford',
    nameEn: 'Watford FC',
    nameAr: 'واتفورد',
    countryAr: 'إنجلترا',
    defaultLogo: '/logos/watford.svg',
    aliases: ['Watford', 'watford', 'واتفورد'],
    primaryColor: '#FBEE23',
    secondaryColor: '#ED2127'
  },
  'las-palmas': {
    id: 'las-palmas',
    nameEn: 'UD Las Palmas',
    nameAr: 'لاس بالماس',
    countryAr: 'إسبانيا',
    defaultLogo: '/logos/las-palmas.svg',
    aliases: ['Las Palmas', 'las palmas', 'لاس بالماس'],
    primaryColor: '#FFD700',
    secondaryColor: '#00529F'
  }
};
