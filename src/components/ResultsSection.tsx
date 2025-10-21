import { Card, CardContent } from '@/components/ui/card';

const ResultsSection = () => {
  const results = [
    {
      url: 'https://cdn.poehali.dev/projects/ee3c1d65-d52e-4bda-bcdd-78b87f238de8/files/f18103cf-9063-4641-a3fa-0da3d481f508.jpg',
      alt: 'Результаты лечения варикоза',
      title: 'Варикозное расширение вен',
      description: 'Курс из 10 сеансов, значительное улучшение состояния сосудов'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ee3c1d65-d52e-4bda-bcdd-78b87f238de8/files/b03fb88c-2139-4e3c-9a5b-630b7ab9be54.jpg',
      alt: 'Результаты лечения суставов',
      title: 'Заболевания суставов',
      description: 'Курс из 8 сеансов, уменьшение отёчности и болевого синдрома'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ee3c1d65-d52e-4bda-bcdd-78b87f238de8/files/78aecbd1-7124-4d01-beb1-2d507d1c5e1b.jpg',
      alt: 'Общее улучшение состояния',
      title: 'Улучшение кровообращения',
      description: 'Курс из 7 сеансов, нормализация микроциркуляции'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Результаты лечения</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальные результаты наших пациентов после курса гирудотерапии
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <Card key={index} className="border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative group">
                <img
                  src={result.url}
                  alt={result.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  До / После
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{result.title}</h3>
                <p className="text-muted-foreground text-sm">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            * Результаты индивидуальны и могут отличаться. Требуется консультация специалиста.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
