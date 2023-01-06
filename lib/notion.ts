import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_KEY })

async function data() {
  const myData = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
  });
  return myData;
}

export {
  data
}

export const getAllCoverage = async () => {
  const periods = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
    filter: {
      property: "Data type",
      select: {
        equals: "Coverage"
      }
    },
    sorts: [
      {
        property: "Date",
        direction: "ascending"
      }
    ]
  });

  const allPeriods = periods.results;

  return allPeriods.map((period) => {
    return getPageMetaData(period);
  });
};

export const getAllOverrides = async() => {
  const periods = await notion.databases.query({
    database_id: `${process.env.NOTION_DATABASE_ID}`,
    filter: {
      property: "Data type",
      select: {
        equals: "Overrides"
      }
    },
    sorts: [
      {
        property: "Date",
        direction: "ascending"
      }
    ]
  });

  const allPeriods = periods.results;

  return allPeriods.map((period) => {
    return getPageMetaData(period);
  });
}

const getPageMetaData = (period: any) => {
  return {
    id: period.id,
    title: period.properties.Period.title[0].plain_text,
    "Partners' Portal": period.properties["Partners Portal"].number,
    "New Admin": period.properties["New Admin"].number,
    "Nuvem Pago": period.properties["Nuvem Pago"].number,
    "Nuvem Envio": period.properties["Nuvem Envio"].number,
    "Average": period.properties["Average"].number,
  };
};
