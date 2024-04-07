from rest_framework import viewsets


class BaseViewSet(viewsets.ModelViewSet):
    '''View for manage ticket APIs.'''

    def get_ordered_queryset(self, queryset, request):
        """
        Order queryset based on query params
        """
        ordering = request.query_params.get('ordering', None)

        if ordering and (ordering in self.ordering_fields or ordering.lstrip('-') in self.ordering_fields):
            return queryset.order_by(ordering)
        return queryset
