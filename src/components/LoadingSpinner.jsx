import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="w-12 h-12 animate-spin text-brand-600" />
    </div>
  );
}
