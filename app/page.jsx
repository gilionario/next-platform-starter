import { Card } from 'components/card';

export const metadata = { title: 'Home' };

export default function HomePage() {
  return (
    <Card className="bg-black text-white p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-green-400">Bem-vindo</h2>
        <p className="text-white">
          Transformamos informação complexa em conhecimento acessível.<br />
          Ajudamos empresas e pessoas a encontrar, organizar e utilizar dados de forma <strong>rápida e eficiente</strong>.
        </p>

        <h3 className="text-xl font-semibold text-green-400">O Problema que Resolvemos</h3>
        <p className="text-white">
          Na internet, a informação está espalhada e muitas vezes desatualizada.<br />
          Encontrar dados relevantes pode ser <strong>difícil e demorado</strong>.
        </p>

        <h3 className="text-xl font-semibold text-green-400">Nossa Solução</h3>
        <ul className="list-disc list-inside space-y-1 text-white">
          <li>Sistemas web que consolidam dados dispersos</li>
          <li>Portais e bases de dados atualizadas</li>
          <li>Ferramentas de pesquisa rápidas e intuitivas</li>
          <li>Serviços de TI e informática</li>
        </ul>

        <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-300">
          Tornamos a informação complexa simples e útil.
        </blockquote>
      </div>
    </Card>
  );
}

