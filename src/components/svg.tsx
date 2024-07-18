'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

function Svg({ src }) {
  const [SvgComponent, setSvgComponent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (src) {
      const loadSvg = async () => {
        try {
          setLoading(true);
          const ImportedSvg = dynamic(() => import(`../../public/${src}`), { ssr: false });
          setSvgComponent(() => ImportedSvg);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      loadSvg();
    }
  }, [src]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading SVG: {error.message}</p>;

  return SvgComponent ? <SvgComponent /> : null;
}

export default Svg;
