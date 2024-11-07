import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base('app8P7WOGseaAOQMl');

export const getMotorcyclesCatalog = async () => {
    return new Promise((resolve, reject) => {
      const motorcycles: any[] = [];
  
      console.log("Iniciando solicitud a Airtable..."); // Log inicial para verificar si la función está siendo ejecutada
  
      base('Motocicletas').select({
        view: "Grid view"
      }).eachPage(
        (records: Airtable.Records<Airtable.FieldSet>, fetchNextPage: () => void) => {
          console.log("Página de resultados obtenida:", records.length); // Ver cuántos registros llegan en cada página
          records.forEach((record: Airtable.Record<Airtable.FieldSet>) => {
            console.log("Registro obtenido:", record.fields); // Log para ver los campos de cada registro
            motorcycles.push(record.fields);
          });
          fetchNextPage();
        },
        (err: Error) => {
          if (err) {
            console.error("Error al obtener datos de Airtable:", err); // Log del error
            reject(err);
          } else {
            console.log("Datos de motocicletas obtenidos correctamente:", motorcycles); // Ver los datos obtenidos
            resolve(motorcycles);
          }
        }
      );
    });
  };
  

// Función para crear un nuevo registro de compra en Airtable
export const createPurchaseRecord = async (purchaseData: any) => {
  return new Promise((resolve, reject) => {
    interface PurchaseRecord {
        fields: {
            [key: string]: any;
        };
    }

    base('Compras').create(
      {
        ...purchaseData
      }, (err: Error, record: Airtable.Record<Airtable.FieldSet> | undefined) => {
      if (err) reject(err);
      resolve(record);
    });
  });
};

export interface Motorcycle {
    Nombre: string;
  }