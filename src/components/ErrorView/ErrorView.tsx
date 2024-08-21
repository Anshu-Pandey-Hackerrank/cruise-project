/**
 * This is a placeholder for an error view
 */
export interface ErrorViewProps {
  error: unknown;
}

export function ErrorView({ error }: ErrorViewProps) {
  return (
    <main className="p-6">
      <h1 className="text-xl font-medium">
        {error instanceof Error ? error.message : 'An error occurred'}
      </h1>
    </main>
  );
}
