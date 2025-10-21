import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    { name: 'Марина К.', text: 'После курса гирудотерапии у Ольги Васильевны значительно улучшилось состояние вен. Очень внимательный и профессиональный специалист!', rating: 5 },
    { name: 'Сергей П.', text: 'Долго мучился с остеохондрозом. После 8 сеансов боли практически прошли. Рекомендую всем!', rating: 5 },
    { name: 'Елена В.', text: 'Прекрасная атмосфера, чистота, профессионализм. Результат превзошёл все ожидания!', rating: 5 }
  ];

  return (
    <section id="reviews" className="py-20 px-4 bg-secondary/30">
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
  );
};

export default ReviewsSection;
