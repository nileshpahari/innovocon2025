export default function AiTips({ aiTips }: { aiTips: any }) {
  return (
    <div className="mt-6 p-4 bg-green-900 rounded-lg">
      <h3 className="text-lg font-semibold">💡 AI-Powered Tips</h3>
      <p className="mt-2 whitespace-pre-line">{aiTips}</p>
    </div>
  );
}
