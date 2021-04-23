
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'

const Contacts = ({ coins }) => {
    return (
    <div>
        <center><h1>Crypto Tracker</h1></center>
        <br/>
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Coin Name</th>
                    <th>Symbol</th>
                    <th>Latest Price</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={() => 
                        <Popover id="popover-basic">
                            <Popover.Title as="h3">{coin.symbol} | {coin.name}</Popover.Title>
                            <Popover.Content>
                                <b>Price: </b>${coin.price} <br/>
                                <b>Volume: </b>${coin.volume} <br/>
                                <b>$100: </b>{coin.hundred} <br/>
                                <b>$250: </b>{coin.quarter} <br/>
                                <b>$5000: </b>{coin.fivegrand}
                            </Popover.Content>
                        </Popover>}>
                            <tr>
                                <td>{coin.name}</td>
                                <td>{coin.symbol}</td>
                                <td>{coin.price}</td>
                            </tr>
                        </OverlayTrigger>
                    ))}
                </tbody>
            </Table>
        </Container>
    </div>
    )
};
export default Contacts