import { faThumbTack, faFolderOpen, faClipboard, faFilter, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFilter, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'




export default function Breadcrumbs() {
    return (
        <div className='d-flex align-items-center justify-content-between ' >

            <FontAwesomeIcon
                className=' px-2 py-2 fs-7 text-warning border rounded pointer '
                icon={faThumbTack}
            />

            <FontAwesomeIcon
                className=' px-2 py-2 fs-7 border rounded pointer '
                icon={faFolderOpen}
            />

            <div className='border d-flex align-items-center px-2 mx-1 pointer' >
                <FontAwesomeIcon
                    className=' px-2 py-2 fs-7 rounded '
                    icon={faClipboard}
                />
                <p className='mb-0'>Views</p>
            </div>

            <Dropdown align="end">
                <Dropdown.Toggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 shadow-none p-0 text-decoration-none  breadcrum-sort-popup"
                    id="action-user1"
                >

                    <div className='border d-flex align-items-center px-2 mx-1 pointer'>
                        <FontAwesomeIcon
                            className=' px-2 py-2 fs-7 rounded '
                            icon={faFilter}
                        />
                        <p className='mb-0'>Filter</p>
                    </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className="fw-bold border-bottom p-3" href="#"><FontAwesomeIcon
                        fontSize={'13px'} className=' px-1 rounded'
                        icon={faFilter}
                    />Filter by</Dropdown.Item>
                    <Dropdown.Item className="py-2 px-3" href="#">Project</Dropdown.Item>
                    <Dropdown.Item className=" py-2 px-3" href="#">Tags</Dropdown.Item>
                    <Dropdown.Item className=" py-2 px-3" href="#">Assigned To</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown align="end">
                <Dropdown.Toggle
                    as="button"
                    bsPrefix="btn"
                    className="btn-link rounded-0 text-black-50 shadow-none p-0 text-decoration-none  breadcrum-sort-popup"
                    id="action-user1"
                >
                    <div className='border d-flex align-items-center px-2 mx-1 pointer'>
                        <FontAwesomeIcon
                            className=' px-2 py-2 fs-7 rounded'
                            icon={faArrowDownWideShort}
                        />
                        <p className='mb-0 '>Sort by</p>
                    </div>



                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className="fw-bold border-bottom p-3" href="#"><FontAwesomeIcon
                        fontSize={'13px'} className=' px-1 rounded'
                        icon={faArrowDownWideShort}
                    />Sort by</Dropdown.Item>
                    <Dropdown.Item className="py-2 px-3" href="#"> Order</Dropdown.Item>
                    <Dropdown.Item className=" py-2 px-3" href="#">Created Date</Dropdown.Item>
                    <Dropdown.Item className=" py-2 px-3" href="#">Due date</Dropdown.Item>
                    <Dropdown.Item className=" py-2 px-3" href="#">Sitting count</Dropdown.Item>
                    <Dropdown.Item className=" py-2 px-3" href="#">Move count</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>




        </div>

    )
}
