import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) => {
  const sections = ['about', 'services', 'indications', 'reviews', 'prices', 'faq', 'contacts'];
  
  const getSectionLabel = (section: string) => {
    const labels: Record<string, string> = {
      about: 'О специалисте',
      services: 'Услуги',
      indications: 'Показания',
      reviews: 'Отзывы',
      prices: 'Цены',
      faq: 'Вопросы',
      contacts: 'Контакты'
    };
    return labels[section] || section;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-primary">Гирудотерапия</h2>
          <div className="hidden md:flex gap-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {getSectionLabel(section)}
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
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-lg text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    {getSectionLabel(section)}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
