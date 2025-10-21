import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    { title: 'Консультация специалиста', description: 'Первичный осмотр и составление индивидуального плана лечения', icon: 'Stethoscope' },
    { title: 'Сеанс гирудотерапии', description: 'Лечебная процедура с применением медицинских пиявок', icon: 'Activity' },
    { title: 'Курс лечения', description: 'Полный курс из 7-10 сеансов для достижения максимального эффекта', icon: 'Calendar' },
    { title: 'Постановка пиявок на дом', description: 'Выездные процедуры в комфортных для вас условиях', icon: 'Home' }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Услуги</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
