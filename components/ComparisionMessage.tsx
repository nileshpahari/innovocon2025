export default function ComparisonMessage({ message }: { message: string }) {
  return (
    <div className="mt-6 p-4 bg-blue-900 rounded-lg">
      <h3 className="text-lg font-semibold">📊 National Comparison</h3>
      <p className="mt-2">{message}</p>
    </div>
  );
}
