import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    { title: 'Консультация специалиста', description: 'Первичный осмотр и составление индивидуального плана лечения', icon: 'Stethoscope' },
    { title: 'Сеанс гирудотерапии', description: 'Лечебная процедура с применением медицинских пиявок', icon: 'Activity' },
    { title: 'Курс лечения', description: 'Полный курс из 7-10 сеансов для достижения максимального эффекта', icon: 'Calendar' },
    { title: 'Постановка пиявок на дом', description: 'Выездные процедуры в комфортных для вас условиях', icon: 'Home' }
  ];

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

  const reviews = [
    { name: 'Марина К.', text: 'После курса гирудотерапии у Ольги Васильевны значительно улучшилось состояние вен. Очень внимательный и профессиональный специалист!', rating: 5 },
    { name: 'Сергей П.', text: 'Долго мучился с остеохондрозом. После 8 сеансов боли практически прошли. Рекомендую всем!', rating: 5 },
    { name: 'Елена В.', text: 'Прекрасная атмосфера, чистота, профессионализм. Результат превзошёл все ожидания!', rating: 5 }
  ];

  const faq = [
    { question: 'Больно ли ставить пиявки?', answer: 'Нет, процедура практически безболезненна. Ощущения сравнимы с легким укусом комара, который быстро проходит благодаря природным обезболивающим веществам в слюне пиявки.' },
    { question: 'Сколько длится один сеанс?', answer: 'Продолжительность сеанса составляет от 30 до 60 минут, в зависимости от индивидуальных особенностей и целей лечения.' },
    { question: 'Как часто нужно проходить процедуры?', answer: 'Обычно рекомендуется курс из 7-10 сеансов с интервалом 3-7 дней между процедурами. Точный график составляется индивидуально.' },
    { question: 'Есть ли побочные эффекты?', answer: 'При соблюдении противопоказаний побочные эффекты минимальны. Возможна небольшая кровоточивость в местах постановки и легкий зуд, которые быстро проходят.' },
    { question: 'Можно ли совмещать с другим лечением?', answer: 'Гирудотерапия хорошо сочетается с большинством видов лечения, но требуется предварительная консультация врача.' }
  ];

  const prices = [
    { service: 'Первичная консультация', price: '1 500 ₽' },
    { service: 'Один сеанс гирудотерапии (3-5 пиявок)', price: '2 500 ₽' },
    { service: 'Курс из 7 сеансов', price: '16 000 ₽' },
    { service: 'Курс из 10 сеансов', price: '22 000 ₽' },
    { service: 'Выезд на дом (в пределах города)', price: '+ 1 000 ₽' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-primary">Гирудотерапия</h2>
            <div className="hidden md:flex gap-6">
              {['about', 'services', 'indications', 'reviews', 'prices', 'faq', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {section === 'about' && 'О специалисте'}
                  {section === 'services' && 'Услуги'}
                  {section === 'indications' && 'Показания'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'prices' && 'Цены'}
                  {section === 'faq' && 'Вопросы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  {['about', 'services', 'indications', 'reviews', 'prices', 'faq', 'contacts'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-lg text-left text-muted-foreground hover:text-primary transition-colors"
                    >
                      {section === 'about' && 'О специалисте'}
                      {section === 'services' && 'Услуги'}
                      {section === 'indications' && 'Показания'}
                      {section === 'reviews' && 'Отзывы'}
                      {section === 'prices' && 'Цены'}
                      {section === 'faq' && 'Вопросы'}
                      {section === 'contacts' && 'Контакты'}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Природная сила для вашего здоровья
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональная гирудотерапия — естественный метод оздоровления с многовековой историей
              </p>
              <Button onClick={() => scrollToSection('contacts')} size="lg" className="text-lg">
                Записаться на консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/ee3c1d65-d52e-4bda-bcdd-78b87f238de8/files/9393e647-eade-4e00-9dd0-6c3db5ca2703.jpg"
                alt="Гирудотерапия"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="services" className="py-20 px-4">
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

      <section id="indications" className="py-20 px-4 bg-secondary/30">
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

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Отзывы пациентов</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&ldquo;{review.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Вопросы и ответы</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Свяжитесь со мной</CardTitle>
                <CardDescription>Я с радостью отвечу на все ваши вопросы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">yakovleva@hirudotherapy.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Природная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Часы работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб: 10:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Записаться на приём</CardTitle>
                <CardDescription>Заполните форму и я свяжусь с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Яковлева Ольга Васильевна. Гирудотерапия</p>
        </div>
      </footer>

      <a
        href="https://wa.me/79991234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        aria-label="Написать в WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;