import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contacts" className="py-20 px-4">
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
  );
};

export default ContactsSection;
