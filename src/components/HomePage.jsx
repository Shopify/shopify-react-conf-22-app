import { Card, Page, EmptyState, List } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';

export function HomePage() {
  const selectedProducts = ['Product 1', 'Product 2', 'Product 3'];

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
      <Card sectioned>
        {selectedProducts.length ? productList : emptyState}
        <ResourcePicker
          resourceType="Product"
          open={true}
          onSelection={() => {}}
        />
      </Card>
    </Page>
  );
}
