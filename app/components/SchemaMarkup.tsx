import { FC } from 'react';

interface SchemaMarkupProps {
  schema: Record<string, any>;
}

export const SchemaMarkup: FC<SchemaMarkupProps> = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export default SchemaMarkup;
