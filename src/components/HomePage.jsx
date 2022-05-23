import { Card, Page, EmptyState, List } from '@shopify/polaris';

export function HomePage() {
  const emptyState = (
    <EmptyState
      heading="Create a Subscription box"
      action={{
        content: 'Select Products',
        onAction: () => console.log('Clicked!'),
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>Select products to create a subscription plan</p>
    </EmptyState>
  );

  const productList = (
    <List>
      <List.Item>Product1 ID</List.Item>
      <List.Item>Product2 ID</List.Item>
      <List.Item>Product3 ID</List.Item>
    </List>
  );

  return (
    <Page fullWidth>
      <Card sectioned>{emptyState}</Card>
    </Page>
  );
}
