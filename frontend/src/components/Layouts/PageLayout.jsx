import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';


function PageLayout({ children, pageTitle, isDarkMode, backPage = '/' }) {
    const styles = {
        footer: {
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '50px',
        },
    }
    return (
        <Container>
            <ToastContainer theme='colored' />
            <main>
                {children}
            </main>
            <footer style={styles.footer}>
                2023 &copy; - Todos los derechos reservados
            </footer>
        </Container>
    )
}

export default PageLayout