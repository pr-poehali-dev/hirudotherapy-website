import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const IndicationsSection = () => {
  const indications = [
    'Варикозное расширение вен',
    'Гипертония и сердечно-сосудистые заболевания',
    'Остеохондроз и заболевания суставов',
    'Гинекологические заболевания',
    'Неврологические нарушения',
    'Заболевания ЖКТ'
  ];

  const contraindications = [
    'Гемофилия и нарушения свертываемости крови',
    'Беременность',
    'Онкологические заболевания',
    'Анемия тяжелой степени',
    'Индивидуальная непереносимость',
    'Острые инфекционные заболевания'
  ];

  return (
    <section id="indications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Показания и противопоказания</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Icon name="CheckCircle" className="text-accent" size={28} />
                Показания
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {indications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Plus" className="text-accent mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Icon name="AlertCircle" className="text-destructive" size={28} />
                Противопоказания
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {contraindications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="X" className="text-destructive mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndicationsSection;
