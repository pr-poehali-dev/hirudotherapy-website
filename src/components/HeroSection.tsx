import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
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
            <Button onClick={onContactClick} size="lg" className="text-lg">
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
  );
};

export default HeroSection;
