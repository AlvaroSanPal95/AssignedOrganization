enum Urgencia {
  Baja,
  Media,
  Alta,
  MuyAlta
}

interface Tarea
{     
  titulo: string;
  descripcion: string;
  duracion: number;
  urgencia: Urgencia;  
}
