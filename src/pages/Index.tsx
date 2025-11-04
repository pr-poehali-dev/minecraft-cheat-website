import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    { icon: "Zap", title: "Скорость", desc: "Молниеносное выполнение команд" },
    { icon: "Shield", title: "Безопасность", desc: "Продвинутые обходы античита" },
    { icon: "Eye", title: "ESP", desc: "Визуализация игроков и предметов" },
    { icon: "Target", title: "Аимбот", desc: "Точное наведение на цель" },
    { icon: "Sparkles", title: "Визуалы", desc: "Красивые эффекты и отображение" },
    { icon: "Cpu", title: "Оптимизация", desc: "Низкая нагрузка на систему" },
    { icon: "Package", title: "Инвентарь", desc: "Автоматизация управления" },
    { icon: "Crosshair", title: "Килл Аура", desc: "Автоматическая атака врагов" }
  ];

  const advantages = [
    { 
      icon: "Gauge", 
      title: "Хорошая оптимизация", 
      desc: "Минимальная нагрузка на FPS, плавная работа даже на слабых ПК" 
    },
    { 
      icon: "ShieldCheck", 
      title: "Хорошие обходы", 
      desc: "Обход античитов последних версий, стабильная работа на серверах" 
    },
    { 
      icon: "Paintbrush", 
      title: "Неплохие визуалы", 
      desc: "Красивые эффекты ESP, настраиваемые цвета и отображение" 
    },
    { 
      icon: "RefreshCw", 
      title: "Частые обновления", 
      desc: "Поддержка новых версий игры, исправление багов, новые функции" 
    }
  ];

  const prices = [
    { 
      name: "День", 
      price: "99₽", 
      period: "1 день", 
      features: ["Все функции", "Обновления", "Поддержка"] 
    },
    { 
      name: "Неделя", 
      price: "399₽", 
      period: "7 дней", 
      features: ["Все функции", "Обновления", "Приоритетная поддержка"],
      popular: true
    },
    { 
      name: "Месяц", 
      price: "999₽", 
      period: "30 дней", 
      features: ["Все функции", "Обновления", "VIP поддержка", "Бонусы"] 
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 8s ease infinite'
        }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">ASTRIX</div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition">Функции</button>
            <button onClick={() => scrollToSection('advantages')} className="hover:text-primary transition">Преимущества</button>
            <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition">Цены</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Контакты</button>
          </div>
          <Button className="hover-glow">Купить</Button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
            🎮 Мультиплейерный чит для Minecraft
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text">
            ASTRIX
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Более <span className="text-primary font-bold">50 функций</span> для полного контроля
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Передовой чит с лучшей оптимизацией, надёжными обходами и красивыми визуалами
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 hover-glow" onClick={() => scrollToSection('prices')}>
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Купить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('features')}>
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            50+ Функций
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Все необходимое для доминирования на сервере
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-border hover-glow hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Наши преимущества
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Почему выбирают именно ASTRIX
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((adv, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-border hover-glow hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name={adv.icon} size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Цены
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Выберите подходящий тариф
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, index) => (
              <Card 
                key={index} 
                className={`bg-card/50 backdrop-blur border-border hover-glow hover:scale-105 transition-all duration-300 relative ${
                  plan.popular ? 'border-primary border-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Популярно
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-5xl font-black gradient-text mb-2">{plan.price}</div>
                  <p className="text-muted-foreground mb-6">{plan.period}</p>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full hover-glow ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}>
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Контакты
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами для приобретения или поддержки
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border hover-glow hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Icon name="Send" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@astrix_support</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border hover-glow hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <Icon name="MessageCircle" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Discord</h3>
                <p className="text-muted-foreground">discord.gg/astrix</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border relative z-10">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 ASTRIX. Все права защищены.</p>
          <p className="text-sm">Чит предназначен только для образовательных целей</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
