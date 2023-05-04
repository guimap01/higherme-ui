import React from 'react';
import './styles/tokens-grid.css';

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([token, value]) => (
          <tr key={token}>
            <td>{token}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
