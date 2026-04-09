import { useEffect, useRef } from 'react';
import mapaBrasil from 'mapa-brasil';

// Mapeamento codIbge -> GUID do estado (você precisa ajustar esses GUIDs conforme sua base de dados)
const IBGE_TO_GUID = {
  12: '12345678-1234-1234-1234-123456789012', // AC
  27: '12345678-1234-1234-1234-123456789013', // AL
  16: '12345678-1234-1234-1234-123456789014', // AP
  13: '12345678-1234-1234-1234-123456789015', // AM
  29: '12345678-1234-1234-1234-123456789016', // BA
  23: '12345678-1234-1234-1234-123456789017', // CE
  53: '12345678-1234-1234-1234-123456789018', // DF
  32: '12345678-1234-1234-1234-123456789019', // ES
  52: '12345678-1234-1234-1234-123456789020', // GO
  21: '12345678-1234-1234-1234-123456789021', // MA
  51: '12345678-1234-1234-1234-123456789022', // MT
  50: '12345678-1234-1234-1234-123456789023', // MS
  31: '12345678-1234-1234-1234-123456789024', // MG
  15: '12345678-1234-1234-1234-123456789025', // PA
  25: '12345678-1234-1234-1234-123456789026', // PB
  41: '12345678-1234-1234-1234-123456789027', // PR
  26: '12345678-1234-1234-1234-123456789028', // PE
  22: '12345678-1234-1234-1234-123456789029', // PI
  33: '12345678-1234-1234-1234-123456789030', // RJ
  24: '12345678-1234-1234-1234-123456789031', // RN
  43: '12345678-1234-1234-1234-123456789032', // RS
  11: '12345678-1234-1234-1234-123456789033', // RO
  14: '12345678-1234-1234-1234-123456789034', // RR
  42: '12345678-1234-1234-1234-123456789035', // SC
  35: '12345678-1234-1234-1234-123456789036', // SP
  28: '12345678-1234-1234-1234-123456789037', // SE
  17: '12345678-1234-1234-1234-123456789038', // TO
};

function MapaBrasil({ onEstadoClick }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    mapaBrasil(containerRef.current, {
      dataPath: '/data',
      defaultFillColor: '#6dbf67',
      defaultStrokeColor: '#1F1A17',
      onClick: ({ codIbge, nomUnidade }) => {
        // Converter código IBGE para GUID
        const estadoGuid = IBGE_TO_GUID[codIbge];
        if (estadoGuid) {
          onEstadoClick(estadoGuid, nomUnidade);
        } else {
          console.warn(`GUID não encontrado para código IBGE: ${codIbge}`);
        }
      },
    });
  }, []);

  return <div ref={containerRef} className="mapa-svg" />;
}

export default MapaBrasil;
