import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">О специалисте</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="User" size={80} className="text-primary" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-semibold text-primary mb-4">Яковлева Ольга Васильевна</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Сертифицированный специалист по гирудотерапии с медицинским образованием
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1" size={20} />
                    <span>Опыт работы более 12 лет</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1" size={20} />
                    <span>Высшее медицинское образование</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1" size={20} />
                    <span>Регулярное повышение квалификации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-accent mt-1" size={20} />
                    <span>Более 500 успешно проведённых курсов лечения</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
