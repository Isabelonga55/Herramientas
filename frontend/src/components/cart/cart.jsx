import React, { useContext, useState } from 'react';
import { Row, Col, ListGroup, Alert } from 'react-bootstrap';
import PageLayout from '../Layouts/PageLayout.jsx';
import { CartContext } from '../../providers/CartContext';
import CartItem from './CartItem';
import CartItemHeader from './CartItemHeader';
import { PayPalButtons } from '@paypal/react-paypal-js';

function Cart() {
    const { cart } = useContext(CartContext);
    const [isPaid, setIsPaid] = useState(false);

    const handleCreateOrder = (data, actions) => {
        const order = actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: (cart.amount * (1 + 0.16)).toFixed(2),
                        currency_code: 'MXN',
                    },
                    description: 'Compra de productos en UCamp Store',
                    shipping_preference: 'NO_SHIPPING',
                },
            ],
            merchant_name: 'UCamp Store',
        });

        console.log('order', order);

        return order;
    };

    const handleCancelledPayment = (data, actions) => {
        console.log('Payment cancelled', data);
    };

    const handlePaidOrder = (data, actions) => {
        console.log('Payment successful', data);
        setIsPaid(true);
        // Aquí puedes realizar acciones adicionales después de que el pago sea exitoso.
    };

    return (
        <PageLayout pageTitle={'Lista de compras'} backPage='/products'>
            {cart.items && cart.items.length > 0 ? (
                <>
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item>
                                    <CartItemHeader />
                                </ListGroup.Item>
                                {cart.items.map((item) => (
                                    <ListGroup.Item key={item.id}>
                                        <CartItem item={item} />
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            Productos: {cart.total}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Subtotal: {cart.amount}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className='text-bold'>
                                A pagar <sub>(Subtotal)</sub>
                            </span>
                            : {cart.amount }
                        </Col>
                    </Row>

                    <hr />

                    <Row>
                        <Col md={4}>
                            {!isPaid ? (
                                <PayPalButtons
                                    disabled={false}
                                    forceReRender={[isPaid]}
                                    fundingSource={undefined}
                                    createOrder={handleCreateOrder}
                                    onApprove={handlePaidOrder}
                                    onCancel={handleCancelledPayment}
                                />
                            ) : (
                                <Alert variant='success'>Pago realizado</Alert>
                            )}
                        </Col>
                    </Row>
                </>
            ) : (
                <Alert variant='warning'>No hay productos en el carrito</Alert>
            )}
        </PageLayout>
    );
}

export default Cart;
