import { Card } from 'components/card';
import Link from 'next/link';

export const metadata = { title: 'Inicio' };

export default function HomePage() {
  return (
    <Card>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Bem-vindo</h2>
          <p>
            Transformamos informação complexa em conhecimento acessível.<br />
            Ajudamos empresas e pessoas a encontrar, organizar e utilizar dados de forma <strong>rápida e eficiente</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">O Problema que Resolvemos</h3>
          <p>
            Na internet, a informação está espalhada e muitas vezes desatualizada.<br />
            Encontrar dados relevantes pode ser <strong>difícil e demorado</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Nossa Solução</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Sistemas web que consolidam dados dispersos</li>
            <li>Portais e bases de dados atualizadas</li>
            <li>Ferramentas de pesquisa rápidas e intuitivas</li>
            <li>Serviços de TI e informática</li>
          </ul>
        </div>

        <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-600">
          Tornamos a informação complexa simples e útil.
        </blockquote>

        {/* Replaced last part with a working button */}
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 transition"
          >
            Entre em contato
          </Link>
        </div>
      </div>
    </Card>
  );
}

