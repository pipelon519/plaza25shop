const businesses = [
    {name: 'Magia Capilar', desc: 'Magia Capilar es un espacio especializado en el cuidado del cabello que combina la venta de productos capilares con un exclusivo SPA capilar, ofreciendo tratamientos personalizados para mantener tu cabello sano, hermoso y lleno de vida. 💜🌿', logo: 'Logos/magiacapilar.jpeg', url: 'https://marianacrn6.wixsite.com/my-site-1'},
    {name: 'Blue Dreams', desc: 'Blue Dreams es una dulcería artesanal que ofrece una amplia variedad de postres elaborados con ingredientes de alta calidad, combinando sabor, estética e innovación.💙✨', logo: 'Logos/bluedreams.png', url: 'https://pipelon519.github.io/Blue-Dreams-shop/'},
    {name: 'Makeup MT', desc: 'Somos una empresa que ofrece productos de maquillaje de alta calidad y servicios personalizados para ayudar a las personas a sentirse seguras y hermosas', logo: 'Logos/makeupmt.jpeg', url: 'https://tsamu519.wixsite.com/makeup-mt'},
    {name: 'Heladeria IA', desc: 'Heladeria IA es una heladeria fuera de lo comun por vender helados a base de inteligencia articial.🍧', logo: 'Logos/heladeriaia.jpeg', url: '#'},
    {name: 'CyberPunk', desc: 'CyberPunk es un restobar temático futurista en Florida que combina gastronomía innovadora, tecnología y cultura geek, ofreciendo una experiencia única de entretenimiento y sabor.', logo: 'Logos/cyberpunk.jpeg', url: 'https://emanuelramirezp16.wixsite.com/cyberpunk'},
    {name: 'Game On', desc: 'El negocio es un centro tecnológico integral dedicado a la venta y reparación de equipos electrónicos y sus accesorios, complementado con la prestación de servicios de sala de internet y videojuegos.', logo: 'Logos/gameon.jpeg', url: 'https://hernandezquirogaca.wixsite.com/game-on'},
    {name: 'Max Sports', desc: 'Somos una empresa especializada en calzado deportivo para ofrecer mayor rendimiento en las actividades deportivas.', logo: 'Logos/maxsports.png', url: 'https://marinsergio1208.wixsite.com/max-sports'},
    {name: 'L\'aura', desc: 'Un negocio de spa ofrece servicios enfocados en el bienestar, la relajación y el cuidado personal. Brinda tratamientos como masajes, faciales, aromaterapia, manicura, pedicura y terapias corporales, en un ambiente tranquilo y armonioso.🌷🪻', logo: 'Logos/laura.jpeg', url: 'https://lalavidal426.wixsite.com/my-site-2'},
    {name: 'Caps City', desc: 'Un negocio de gorras se dedica a la venta y personalización de gorras de distintos estilos, colores y materiales.👑🧢', logo: 'Logos/logotipo.png', url: 'https://tsamu519.wixsite.com/caps-city'},
    {name: 'Aura beauty', desc: 'Es una tienda de productos de belleza y cuidado personal que se enfoca en la calidad y la curacion para ofrecer experiencias simples que mejoren  tu rutina diaria.💕🌸', logo: 'Logos/aurabeauty.jpeg', url: 'https://menesesxochitl72.wixsite.com/aura-beauty'},
];
    
function createCard(b) {
    const card = document.createElement('article');
    card.className = 'card';
  
    // Logo arriba (proporcional y con fallback)
    const logoWrap = document.createElement('div');
    logoWrap.className = 'logo-wrap';
    const img = document.createElement('img');
    img.className = 'logo-img';
    img.src = b.logo || 'https://via.placeholder.com/400x220?text=Sin+logo';
    img.alt = `${b.name} — logo`;
    img.loading = 'lazy';
    img.onerror = function() {
      this.onerror = null;
      this.src = 'https://via.placeholder.com/400x220?text=Imagen+no+disponible';
    };
    logoWrap.appendChild(img);
  
    // Contenido
    const content = document.createElement('div');
    content.className = 'content';
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = b.name;
    const desc = document.createElement('div');
    desc.className = 'desc';
    desc.textContent = b.desc;
    const a = document.createElement('a');
    a.className = 'visit';
    a.href = b.url || '#';
    a.textContent = 'Visitar sitio';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  
    content.appendChild(name);
    content.appendChild(desc);
    content.appendChild(a);
  
    card.appendChild(logoWrap);
    card.appendChild(content);
  
    return card;
  }
  
  function init() {
    const list = document.getElementById('business-list');
    list.innerHTML = '';
    businesses.forEach(b => list.appendChild(createCard(b)));
  }
  
  document.addEventListener('DOMContentLoaded', init);
