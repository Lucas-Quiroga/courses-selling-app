// Importa los hooks necesarios de React
import { useCallback, useEffect, useState } from "react";

// Define y exporta el hook personalizado useScroll
export default function useScroll(threshold: number) {
  // Estado local para rastrear si se ha superado el umbral de desplazamiento
  const [scrolled, setScrolled] = useState(false);

  // Función de devolución de llamada que se ejecuta cuando ocurre un evento de desplazamiento
  const onScroll = useCallback(() => {
    // Actualiza el estado según si el desplazamiento supera el umbral
    setScrolled(window.scrollY > threshold);
  }, [threshold]); // Depende del umbral para evitar referencias obsoletas

  // Efecto secundario para agregar un evento de escucha de desplazamiento cuando el componente se monta
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    // Limpia el evento de escucha cuando el componente se desmonta
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]); // Depende de onScroll para asegurar la consistencia de la función de devolución de llamada

  // Efecto secundario para inicializar el estado de desplazamiento cuando el componente se monta
  useEffect(() => {
    onScroll();
  }, [onScroll]); // Dependencia para garantizar que se actualice correctamente al montar el componente

  // Retorna el estado actual de si se ha superado el umbral de desplazamiento
  return scrolled;
}
