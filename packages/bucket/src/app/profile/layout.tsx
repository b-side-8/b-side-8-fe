import TopNavigateBar from '@/components/TopNavigateBar';

export default async function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopNavigateBar type="profileNavigator" />
      {children}
    </section>
  );
}
