import { Card, CardContent } from '@/components/ui/card';

const CertificatesSection = () => {
  const certificates = [
    {
      url: 'https://cdn.poehali.dev/projects/ee3c1d65-d52e-4bda-bcdd-78b87f238de8/files/24474f4f-1235-4c47-80f3-d93b897d8711.jpg',
      alt: 'Диплом о высшем медицинском образовании',
      title: 'Диплом о высшем медицинском образовании'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ee3c1d65-d52e-4bda-bcdd-78b87f238de8/files/51ed103f-9929-455e-bccc-9d6d52b1cf60.jpg',
      alt: 'Сертификат по гирудотерапии',
      title: 'Сертификат специалиста по гирудотерапии'
    },
    {
      url: 'https://cdn.poehali.dev/projects/ee3c1d65-d52e-4bda-bcdd-78b87f238de8/files/fc73ff0c-a0b6-4bb4-802b-f84131616acb.jpg',
      alt: 'Сертификат повышения квалификации',
      title: 'Сертификат повышения квалификации'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Сертификаты и дипломы</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-shadow group cursor-pointer overflow-hidden">
              <div className="relative">
                <img
                  src={cert.url}
                  alt={cert.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <p className="text-center font-medium">{cert.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
