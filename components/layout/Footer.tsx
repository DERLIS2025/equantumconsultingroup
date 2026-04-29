export default function Footer() {
  return (
    <footer className="bg-[#091F51] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div><h3 className="text-2xl font-bold mb-3">Equantum</h3><p className="text-blue-100 text-sm">Convertimos tu presencia digital en un sistema comercial.</p></div>
        <div><h4 className="font-semibold mb-3">Navegación</h4><ul className="space-y-2 text-sm text-blue-100"><li><a href="#servicios">Servicios</a></li><li><a href="#soluciones">Soluciones</a></li><li><a href="#proceso">Proceso</a></li><li><a href="#casos">Casos</a></li></ul></div>
        <div><h4 className="font-semibold mb-3">Servicios</h4><ul className="space-y-2 text-sm text-blue-100"><li>Arquitectura Digital</li><li>Ecommerce</li><li>Shopify</li><li>SEO y Posicionamiento</li></ul></div>
        <div><h4 className="font-semibold mb-3">Contacto</h4><ul className="space-y-2 text-sm text-blue-100"><li>WhatsApp: +595 985 194 953</li><li>contacto@equantum.com.py</li><li>Asunción, Paraguay</li></ul></div>
      </div>
    </footer>
  )
}
