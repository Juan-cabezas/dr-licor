export const LEGAL_DOCUMENTS = {
    terms: {
        title: "Términos y Condiciones",
        summary: (
        <>
            <p>• Servicio exclusivo para <strong>mayores de 18 años</strong>. Se solicitará confirmación de edad al entregar el domicilio.</p>
            <p>• Los pedidos están sujetos a disponibilidad de cobertura en Bogotá (Suba, San Pedro y zonas aledañas).</p>
            <p>• Incluye las pautas de garantía, cambios y cancelaciones antes del despacho del domicilio.</p>
        </>
        ),
        fullText: (
            <div className="space-y-4 text-slate-300">
                <div>
                    <h4 className="font-bold text-amber-500 mb-1">1. IDENTIFICACIÓN Y OBJETO DEL SITIO</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                        <li><strong>Identificación del Vendedor:</strong> Dr. Licor Bogotá, establecimiento dedicado a la comercialización y distribución a domicilio de bebidas alcohólicas y productos complementarios en la ciudad de Bogotá D.C.</li>
                        <li><strong>Objeto:</strong> Los presentes Términos y Condiciones regulan el acceso, uso de la plataforma web www.drlicor.com y la adquisición de productos a través de nuestros canales de venta digital.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">2. RESTRICCIÓN DE EDAD Y VENTA RESPONSABLE (LEY 124 DE 1994)</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                        <li><strong>Prohibición a Menores:</strong> De conformidad con la Ley 124 de 1994 y la legislación colombiana vigente, está estrictamente prohibida la venta de bebidas embriagantes a menores de 18 años.</li>
                        <li><strong>Verificación de Mayoría de Edad:</strong> Al ingresar a nuestro sitio web y realizar un pedido, el usuario declara bajo gravedad de juramento ser mayor de edad.</li>
                        <li><strong>Exigencia de Documento en Entrega:</strong> El domiciliario o repartidor solicitará la presentación de la cédula de ciudadanía o documento de identidad original al momento de entregar el pedido. Si quien recibe es menor de edad o no presenta documento de identidad, el pedido no será entregado y se cancelará la transacción.</li>
                        <li><strong>Advertencia de Salud:</strong> El exceso de alcohol es perjudicial para la salud (Ley 30 de 1986). Prohíbase el expendio de bebidas embriagantes a menores de edad.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">3. ZONAS DE COBERTURA, HORARIOS Y DESPACHO</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                        <li><strong>Cobertura:</strong> Nuestras entregas se realizan dentro de la zona delimitada de cobertura en Bogotá D.C. (con prioridad en Suba, San Pedro y zonas aledañas autorizadas).</li>
                        <li><strong>Tiempos de Entrega:</strong> Los tiempos de entrega informados son estimados y pueden variar de acuerdo con el tráfico de la ciudad, condiciones climáticas o alta demanda.</li>
                        <li><strong>Recepción del Pedido:</strong> Es responsabilidad del cliente proporcionar una dirección exacta, con indicaciones claras (barrio, torre, apartamento, casa o datos y/o indicaciones adicionales) y estar atento a las llamadas o mensajes de confirmación.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">4. PRECIOS, DISPONIBILIDAD Y PAGOS</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                        <li><strong>Precios:</strong> Todos los precios publicados en la tienda virtual están expresados en pesos colombianos (COP) e incluyen los impuestos aplicables.</li>
                        <li><strong>Disponibilidad de Inventario:</strong> Los productos están sujetos a disponibilidad de stock. En caso de agotarse un producto posterior a la confirmación de la orden, se contactará de inmediato al cliente para ofrecer una alternativa o efectuar la devolución del dinero.</li>
                        <li><strong>Medios de Pago Habilitados:</strong> El cliente podrá realizar el pago de su pedido a través de las pasarelas y métodos digitales habilitados en la plataforma web o informados al momento de confirmar la orden. Dr. Licor Bogotá acepta transferencias y pagos digitales en línea (ej. Botón de Pago, Códigos QR, Llaves), así como pagos con tarjeta débito, crédito o tecnología NFC sin contacto mediante datáfono según disponibilidad en el momento de la entrega en sitio.</li>
                        <li><strong>Pagos en Efectivo:</strong> La opción de pago en efectivo contra entrega estará sujeta a disponibilidad, validación previa del pedido y restricciones de seguridad según la zona de entrega, el horario o el monto de la transacción. Dr. Licor Bogotá se reserva el derecho de exigir medios de pago digitales para el despacho de pedidos.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">5. DERECHO DE RETRACTO, CANCELACIONES Y DEVOLUCIONES</h4>               
                    <p className="font-semibold text-slate-200 mt-2">A. Cancelación del Pedido y Cobro de Flete por Domicilio</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Cancelación antes del despacho:</strong> El cliente podrá cancelar su pedido sin penalidad siempre que el domiciliario no haya salido hacia la dirección de destino.</li>
                        <li><strong>Cancelación con Domiciliario en Ruta:</strong> Si el pedido ya salió hacia la dirección de entrega y el cliente solicita la cancelación antes de la llegada del repartidor, el cliente podrá recibir el reembolso del valor de los productos, pero deberá asumir o se le descontará el costo total del flete de transporte ocasionado.</li>
                        <li><strong>Cancelación o Rechazo en Puerta / Dirección Errónea:</strong> Si el domiciliario llega al punto de entrega y el cliente cancela, rechaza el pedido sin causa justificada, no responde las llamadas tras un tiempo de espera razonable (máximo 5 minutos), o suministró una dirección incorrecta, se procederá al retorno del pedido. El valor de los productos será reembolsado, pero el costo del servicio de domicilio será cobrado o descontado de la transacción.</li>
                    </ul>

                    <p className="font-semibold text-slate-200 mt-2">B. Excepción al Derecho de Retracto y Devolución de Productos Abiertos</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Protección de Salubridad (Ley 1480 de 2011):</strong> Por tratarse de bebidas y bienes de consumo humano, NO se aceptan cambios, devoluciones ni derecho de retracto sobre botellas, latas o empaques cuyos sellos de seguridad, estampillas, tapas, celofán o empaques originales hayan sido abiertos, manipulados, rasgados o alterados.</li>
                        <li><strong>Revisión en el Momento de la Entrega:</strong> El cliente tiene la obligación de revisar el estado físico exterior de los productos (sellos de la DIAN/Gobernación, tapas intactas, envases sin fisuras) en presencia del domiciliario antes de firmar o confirmar la recepción.</li>
                    </ul>

                    <p className="font-semibold text-slate-200 mt-2">C. Procedimiento ante Averías, Inconformidades y Solicitudes de Reposición</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Reporte e Inspección Física Obligatoria:</strong> Si el cliente alega que un producto presenta un defecto de fábrica, filtración o avería no detectable a simple vista, deberá reportarlo de inmediato (plazo máximo de 24 horas) a la línea de WhatsApp +57 322 252 4569 enviando fotografías y video de evidencia.</li>
                        <li><strong>Condición de Inspección e Intercambio Físico:</strong> Bajo NINGUNA circunstancia se realizará la reposición de un producto ni la devolución del dinero manteniendo el producto reportado en poder del cliente. Para procesar cualquier garantía o cambio, el cliente debe entregar el producto presuntamente afectado en su envase original con al menos el 90% de su contenido líquido para su posterior inspección técnica.</li>
                        <li><strong>Gastos de Transporte por Cambio o Verificación:</strong> Si el cambio se solicita por un error imputable a Dr. Licor Bogotá (producto equivocado o avería de fábrica comprobada), la empresa asumirá el costo del flete. Si la verificación demuestra que el producto está en perfectas condiciones y no presenta fallas, o si el cambio responde a un arrepentimiento del cliente sobre un producto sellado, el cliente deberá asumir el costo del nuevo domicilio de recolección y entrega.</li>
                    </ul>

                    <div className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-amber-300">
                        <strong>Cláusula de Protección Anti-Fraude:</strong> Dr. Licor Bogotá no aceptará reclamos de garantía sobre botellas cuyo contenido haya sido consumido, alterado o trasvasado. Toda solicitud de reposición requiere la entrega física del envase objeto del reclamo para la validación de estampilla de licor y lote de producción.
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">6. PROPIEDAD INTELECTUAL</h4>
                    <p>
                        Todos los contenidos del sitio web (marcas, logotipos, imágenes, textos, diseños y código fuente) son propiedad exclusiva de Dr. Licor Bogotá o de sus respectivos licenciantes, y están protegidos por las leyes de propiedad intelectual y derechos de autor en Colombia.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">7. CANALES DE ATENCIÓN Y CONTACTO (PQRS)</h4>
                    <p>Para cualquier consulta, reclamo o solicitud relacionada con el uso del sitio o un pedido en curso, los canales oficiales de atención son:</p>
                    <ul className="list-disc list-inside space-y-1 pl-1 mt-1">
                        <li><strong>WhatsApp Oficial:</strong> +57 322 252 4569</li>
                        <li><strong>Correo Electrónico:</strong> dr.licor.bogota@gmail.com</li>
                        <li><strong>Sitio Web:</strong> https://www.drlicor.com</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">8. ACEPTACIÓN Y MODIFICACIÓN DE LOS TÉRMINOS</h4>
                    <p>
                        El uso del sitio web o la realización de un pedido implica la aceptación completa y sin reservas de estos Términos y Condiciones. Dr. Licor Bogotá se reserva el derecho de actualizar este documento en cualquier momento, publicando la nueva versión en la página web.
                    </p>
                </div>
            </div>
        )
    },
    privacy: {
        title: "Tratamiento de Datos Personales",
        summary: (
        <>
            <p>• Recopilamos únicamente datos de contacto como (nombre, teléfono, dirección, etc.) para procesar y entregar el pedido.</p>
            <p>• <strong>Pagos Seguros:</strong> Las transacciones bancarias son procesadas externamente por <strong>Bold</strong> (checkout.bold.co). Dr. Licor no captura ni almacena datos de tarjetas.</p>
            <p>• Puedes ejercer tus derechos de acceso, rectificación o supresión de datos conforme a la Ley 1581 de 2012.</p>
        </>
        ),
        fullText: (
            <div className="space-y-4 text-slate-300">
                <div>
                    <h4 className="font-bold text-amber-500 mb-1">1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                        <li><strong>Razón Social / Nombre Comercial:</strong> Dr. Licor Bogotá</li>
                        <li><strong>Ubicación / Cobertura Principal:</strong> Suba, San Pedro, Bogotá D.C., Colombia</li>
                        <li><strong>Correo Electrónico de Contacto:</strong> dr.licor.bogota@gmail.com</li>
                        <li><strong>Línea de Atención / WhatsApp:</strong> +57 322 252 4569</li>
                        <li><strong>Sitio Web Oficial:</strong> https://www.drlicor.com</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">2. MARCO LEGAL Y PROPÓSITO</h4>
                    <p>
                        La presente Política de Tratamiento de Datos Personales se dicta en cumplimiento de la <strong>Ley Estatutaria 1581 de 2012</strong>, el Decreto Reglamentario 1377 de 2013 y demás normas concordantes en la República de Colombia.
                    </p>
                    <p className="mt-1">
                        Dr. Licor Bogotá reconoce la importancia de la privacidad, la intimidad y el buen nombre de sus clientes, por lo cual recolecta, almacena y procesa la información personal de forma segura, garantizando el pleno ejercicio de sus derechos de Habeas Data.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">3. DATOS PERSONALES RECOLECTADOS</h4>
                    <p>Para la prestación eficiente de nuestros servicios de comercialización y entrega a domicilio de bebidas, recolectamos los siguientes datos:</p>
                    <ul className="list-disc list-inside space-y-1 pl-1 mt-1">
                        <li>Nombre completo.</li>
                        <li>Número de teléfono de contacto y/o WhatsApp.</li>
                        <li>Dirección exacta de entrega (Barrio, calle, número, apartamento/interior/indicaciones) en Bogotá.</li>
                        <li>Dirección de correo electrónico.</li>
                        <li>Confirmación de mayoría de edad (Declaración de ser mayor de 18 años).</li>
                        <li>Datos de navegación y dispositivos: Registro de navegación, dirección IP, tipo de navegador, identificadores de dispositivos, historial de interacción dentro de la web, cookies técnicas de uso del sitio web y cookies publicitarias/analíticas.</li>
                    </ul>

                    <div className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-amber-300">
                        <strong>Nota importante:</strong> Dr. Licor Bogotá NO almacena ni procesa información financiera ni de tarjetas de crédito/débito directamente. Los pagos digitales se procesan de forma cifrada a través de pasarelas de pago y datáfonos autorizados (Ej. Bold, Redeban, Bancolombia).
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">4. FINALIDAD DEL TRATAMIENTO DE DATOS</h4>
                    <p>Los datos personales recolectados por Dr. Licor Bogotá serán utilizados para las siguientes finalidades directas:</p>
                    
                    <p className="font-semibold text-slate-200 mt-2">A. Gestión Operativa y Comercial</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Gestionar, despachar, entregar y hacer seguimiento a los pedidos de productos solicitados por el cliente.</li>
                        <li>Soportar el proceso de facturación, cobro y atención al cliente.</li>
                        <li>Confirmar la identidad y verificar la mayoría de edad del comprador al momento de la entrega del pedido (cumplimiento Ley 124 de 1994).</li>
                        <li>Enviar notificaciones sobre el estado del pedido a través de SMS, WhatsApp, correo electrónico o llamadas telefónicas.</li>
                        <li>Gestionar peticiones, quejas, reclamos y sugerencias (PQRS) o solicitudes de devolución.</li>
                        <li>Realizar encuestas de satisfacción, reseñas y mejorar la calidad del servicio técnico y comercial.</li>
                    </ul>

                    <p className="font-semibold text-slate-200 mt-2">B. Publicidad, Marketing y Analítica</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Enviar promociones, descuentos, novedades y ofertas de Dr. Licor Bogotá a través de correo electrónico o WhatsApp.</li>
                        <li>Realizar campañas de publicidad personalizada, remarketing y anuncios dirigidos en redes sociales (Meta/Facebook/Instagram) y buscadores (Google Ads).</li>
                        <li>Analizar el tráfico del sitio web mediante herramientas estadísticas (Google Analytics) para mejorar la experiencia del usuario.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">5. COMPARTICIÓN DE DATOS CON TERCEROS Y PROCESADORES</h4>
                    <p>Para la correcta prestación del servicio y la ejecución de campañas publicitarias, Dr. Licor Bogotá podrá compartir datos con:</p>
                    <ul className="list-disc list-inside space-y-1 pl-1 mt-1">
                        <li><strong>Empresas de Transporte / Domiciliarios:</strong> Únicamente los datos necesarios (nombre, teléfono y dirección) para completar la entrega.</li>
                        <li><strong>Pasarelas de Pago:</strong> Proveedores de tecnología financiera autorizados (ej. Bold, Nequi, Bancolombia) para procesar cobros de forma cifrada. Se comparten únicamente los datos básicos de la transacción para la ejecución del pago. Dr. Licor Bogotá no recopila ni almacena datos de tarjetas ni credenciales bancarias.</li>
                        <li><strong>Plataformas de Analítica y Publicidad Digital:</strong> Proveedores tecnológicos como Google LLC y Meta Platforms, Inc., mediante etiquetas y píxeles de rastreo.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">6. DERECHOS DE LOS TITULARES (DERECHOS HABEAS DATA)</h4>
                    <p>De conformidad con el artículo 8 de la Ley 1581 de 2012, los clientes de Dr. Licor Bogotá tienen derecho a:</p>
                    <ul className="list-disc list-inside space-y-1 pl-1 mt-1">
                        <li>Conocer, actualizar y rectificar sus datos personales en cualquier momento.</li>
                        <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
                        <li>Ser informados sobre el uso que se les ha dado a sus datos personales.</li>
                        <li>Revocar la autorización y/o solicitar la supresión de sus datos cuando considere que en el tratamiento no se respetan los principios, derechos y garantías constitucionales y legales.</li>
                        <li>Acceder de forma gratuita a sus datos personales objeto de tratamiento.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">7. PROCEDIMIENTO PARA EL EJERCICIO DE DERECHOS (CONSULTAS Y RECLAMOS)</h4>
                    <p>El cliente o titular de los datos podrá ejercer sus derechos de conocer, actualizar, rectificar o suprimir su información mediante el envío de una solicitud escrita a través de los siguientes canales:</p>
                    <ul className="list-disc list-inside space-y-1 pl-1 mt-1">
                        <li><strong>Correo Electrónico:</strong> dr.licor.bogota@gmail.com</li>
                        <li><strong>WhatsApp Oficial:</strong> +57 322 252 4569</li>
                    </ul>
                    
                    <p className="font-semibold text-slate-200 mt-2">Plazos Legales de Respuesta:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Consultas:</strong> Serán atendidas en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo.</li>
                        <li><strong>Reclamos o Solicitud de Supresión:</strong> Serán atendidos en un término máximo de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">8. USO DE COOKIES Y TECNOLOGÍAS DE RASTREO</h4>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                        <li><strong>Cookies Técnicas y de Terceros:</strong> Nuestro sitio web utiliza cookies técnicas (necesarias para el funcionamiento del carrito de compras y la sesión activa) y cookies de terceros (analíticas y publicitarias como Meta Pixel y Google Analytics).</li>
                        <li><strong>Configuración del Navegador:</strong> El usuario puede configurar su navegador en cualquier momento para bloquear o eliminar las cookies. Sin embargo, desactivar las cookies técnicas podría afectar la funcionalidad del carrito de compras.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-amber-500 mb-1">9. VIGENCIA Y MODIFICACIONES</h4>
                    <p>
                        Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales y contables de la empresa.
                    </p>
                    <p className="mt-1">
                        Dr. Licor Bogotá se reserva el derecho de modificar esta política en cualquier momento. Cualquier cambio sustancial será publicado y notificado a través de nuestro sitio web oficial https://www.drlicor.com.
                    </p>
                </div>
            </div>
        )
    }
};