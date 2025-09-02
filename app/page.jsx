import { Card } from 'components/card';
import Link from 'next/link';

export const metadata = { title: 'Home' };

const homeContent = `
## Bem-vindo

Transformamos informação complexa em conhecimento acessível.  
Ajudamos empresas e pessoas a encontrar, organizar e utilizar dados de forma **rápida e eficiente**.

## O Problema que Resolvemos

Na internet, a informação está espalhada e muitas vezes desatualizada.  
Encontrar dados relevantes pode ser **difícil e demorado**.

## Nossa Solução

Oferecemos:

- Sistemas web que consolidam dados dispersos  
- Portais e bases de dados atualizadas  
- Ferramentas de pesquisa rápidas e intuitivas  
- Serviços de TI e informática  

> Tornamos a informação complexa simples e útil.
`;

export default function HomePage() {
  return (
    <Card>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Bem-vindo</h2>
        <p>
          Transformamos informação complexa em conhecimento acessível.<br />
          Ajudamos empresas e pessoas a encontrar, organizar e utilizar dados de forma <strong>rápida e eficiente</strong>.
        </p>

        <h3 className="text-xl font-semibold">O Problema que Resolvemos</h3>
        <p>
          Na internet, a informação está espalhada e muitas vezes desatualizada.<br />
          Encontrar dados relevantes pode ser <strong>difícil e demorado</strong>.
        </p>

        <h3 className="text-xl font-semibold">Nossa Solução</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Sistemas web que consolidam dados dispersos</li>
          <li>Portais e bases de dados atualizadas</li>
          <li>Ferramentas de pesquisa rápidas e intuitivas</li>
          <li>Serviços de TI e informática</li>
        </ul>

        <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-600">
          Tornamos a informação complexa simples e útil.
        </blockquote>

        <div className="mt-6">
        </div>
      </div>
    </Card>
  );
}
