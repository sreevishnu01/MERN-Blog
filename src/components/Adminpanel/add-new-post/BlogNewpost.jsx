import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SidebarCategories from './SidebarCategories'
import Editor from './Editor'

function BlogNewpost() {

    
    return (
        <div>
            <Row className="mt-5">
                <Col md={9}>
                    <Editor />
                </Col>
                <Col>
                    <SidebarCategories />
                </Col>
            </Row>

        </div>
    )
}

export default BlogNewpost
