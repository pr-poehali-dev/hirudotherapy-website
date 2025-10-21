import { Card, CardContent } from '@/components/ui/card';

const PricesSection = () => {
  const prices = [
    { service: 'Первичная консультация', price: '1 500 ₽' },
    { service: 'Один сеанс гирудотерапии (3-5 пиявок)', price: '2 500 ₽' },
    { service: 'Курс из 7 сеансов', price: '16 000 ₽' },
    { service: 'Курс из 10 сеансов', price: '22 000 ₽' },
    { service: 'Выезд на дом (в пределах города)', price: '+ 1 000 ₽' }
  ];

  return (
    <section id="prices" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Цены</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <Card className="border-none shadow-lg">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {prices.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-6 hover:bg-secondary/50 transition-colors">
                  <span className="text-lg">{item.service}</span>
                  <span className="text-xl font-semibold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricesSection;
